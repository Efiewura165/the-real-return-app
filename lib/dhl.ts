import { randomUUID } from "node:crypto";

import type { ShippingAddress } from "@/types/checkout";

const DHL_BASE_URL = "https://express.api.dhl.com/mydhlapi/test";

export interface ShipmentResult {
  trackingNumber: string;
  mock: boolean;
}

function hasDhlCredentials() {
  return Boolean(process.env.DHL_API_KEY && process.env.DHL_ACCOUNT_NUMBER);
}

/**
 * Books a welcome/prep-kit shipment via DHL's sandbox Shipment API. Without
 * DHL_API_KEY / DHL_ACCOUNT_NUMBER set, this logs the intended shipment and
 * returns a mock tracking number — same fallback pattern used for PayPal
 * and the Resend email integration, so the reservation flow keeps working
 * before real DHL business credentials exist.
 */
export async function createWelcomeKitShipment(shipping: ShippingAddress): Promise<ShipmentResult> {
  if (!hasDhlCredentials()) {
    const mockTracking = `MOCK-DHL-${randomUUID().slice(0, 10).toUpperCase()}`;
    console.warn(
      `[dhl] DHL_API_KEY/DHL_ACCOUNT_NUMBER not set — no real shipment was booked.\n` +
        `Would have shipped a welcome/prep kit to ${shipping.name}, ${shipping.addressLine1}, ${shipping.city}, ${shipping.countryCode}.\n` +
        `Returning mock tracking number ${mockTracking}.`,
    );
    return { trackingNumber: mockTracking, mock: true };
  }

  const response = await fetch(`${DHL_BASE_URL}/shipments`, {
    method: "POST",
    headers: {
      "DHL-API-Key": process.env.DHL_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      plannedShippingDateAndTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      productCode: "P",
      accounts: [{ typeCode: "shipper", number: process.env.DHL_ACCOUNT_NUMBER }],
      customerDetails: {
        shipperDetails: {
          postalAddress: {
            addressLine1: process.env.DHL_SHIP_FROM_ADDRESS_LINE ?? "",
            cityName: process.env.DHL_SHIP_FROM_CITY ?? "",
            postalCode: process.env.DHL_SHIP_FROM_POSTAL_CODE ?? "",
            countryCode: process.env.DHL_SHIP_FROM_COUNTRY_CODE ?? "US",
          },
          contactInformation: {
            fullName: process.env.DHL_SHIP_FROM_NAME ?? "The Real Return",
            email: "hello@therealreturn.com",
            phone: "0000000000",
            companyName: "The Real Return",
          },
        },
        receiverDetails: {
          postalAddress: {
            addressLine1: shipping.addressLine1,
            addressLine2: shipping.addressLine2,
            cityName: shipping.city,
            provinceCode: shipping.state,
            postalCode: shipping.postalCode,
            countryCode: shipping.countryCode,
          },
          contactInformation: {
            fullName: shipping.name,
            email: shipping.email,
            phone: "0000000000",
          },
        },
      },
      content: {
        packages: [{ weight: 1, dimensions: { length: 25, width: 20, height: 10 } }],
        isCustomsDeclarable: false,
        description: "The Real Return™ — Journey welcome & preparation kit",
        unitOfMeasurement: "metric",
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`DHL shipment creation failed: ${response.status} ${body}`);
  }

  const data = await response.json();
  return { trackingNumber: data.shipmentTrackingNumber ?? data.trackingNumber, mock: false };
}
