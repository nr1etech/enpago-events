import {EventMetadata} from './event.mjs';

export type ProviderType = 'NMI' | 'Plaid';

export interface ProviderConfiguration {
  /**
   * The type of payment provider that processed this payment.
   */
  type: ProviderType;

  /**
   * The configuration ID of the payment provider used to process this payment.
   */
  id: string;
}

export type PaymentStatus =
  | 'Pending' // Example would be an authorized credit card payment
  | 'Completed' // Example would be a captured credit card payment
  | 'Finalized' // Example would be a settled credit card payment
  | 'Failed'
  | 'Errored'
  | 'Canceled';

export interface PaymentChangeEvent {
  /**
   * Event metadata.
   */
  event: EventMetadata;

  /**
   * The payment provider that processed this payment.
   */
  provider: ProviderConfiguration;

  /**
   * The ID of the payment
   */
  id: string;

  /**
   * The original amount of the payment before refunds. With a credit card
   * capture, this value may be updated to reflect the total amount captured
   * from the amount that was authorized.
   */
  originalAmount: string;

  /**
   * The total amount of the payment. A canceled payment and a fully refunded
   * payment will have a value of 0. A credit will have a negative amount.
   * You can infer if the payment was refunded or partially refunded by
   * comparing this value to the original amount.
   */
  amount: string;

  /**
   * The currency of the payment.
   */
  currency: string;

  /**
   * The current status of this payment.
   */
  status: PaymentStatus;

  /**
   * The date of the payment in ISO 8601 format.
   */
  paymentDate: string;
}
