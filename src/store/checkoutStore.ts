import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ProfileFormData = {
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
};

export type PlanType = "MONTHLY" | "TRIMESTRAL" | "YEARLY" | "PREMIUM";

export type PaymentData = {
  method?: "card" | "mercadopago" | "paypal";
  status?: "pending" | "success" | "failed";
  transactionId?: string;
  amount?: number;
  date?: Date;
};

export type MembershipData = {
  membershipId?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
};

export type SubscriptionData = {
  plan?: PlanType;
  status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "EXPIRED";
  startDate?: Date;
  endDate?: Date;
  externalId?: string;
  payments?: PaymentData[];
  membership?: MembershipData;
};

type CheckoutState = {
  profile: ProfileFormData;
  subscription: SubscriptionData;
  payment: PaymentData;
  loading: boolean;

  setProfile: (data: ProfileFormData) => void;
  setSubscription: (data: SubscriptionData) => void;
  setPayment: (data: PaymentData) => void;
  setLoading: (loading: boolean) => void;
  resetCheckout: () => void;
};

export const useCheckoutStore = create<CheckoutState>()(
  devtools(
    persist(
      (set) => ({
        profile: {},
        subscription: {},
        payment: {},
        loading: false,

        setProfile: (data) => set({ profile: { ...data } }),
        setSubscription: (data) => set({ subscription: { ...data } }),
        setPayment: (data) => set({ payment: { ...data } }),
        setLoading: (loading) => set({ loading }),
        resetCheckout: () =>
          set({ profile: {}, subscription: {}, payment: {}, loading: false }),
      }),
      {
        name: "checkout-storage-gogym",
      }
    )
  )
);
