export type EventSource = 'enpago-nmi' | 'enpago-plaid';

export type PaymentProvider = 'NMI' | 'Plaid';

export type PaymentStatus =
  | 'Pending' // Example would be an authorized credit card payment
  | 'Completed' // Example would be a captured credit card payment
  | 'Finalized' // Example would be a settled credit card payment
  | 'Canceled';

export interface PaymentChangeEventDetail {
  /**
   * The provider that processed this payment.
   */
  provider: PaymentProvider;

  /**
   * The ID of the configuration that processed this payment.
   */
  configuration: string;

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
  date: string;
}

export interface PaymentChangeEvent {
  source: EventSource;
  type: 'PaymentChange';
  detail: PaymentChangeEventDetail;
}
