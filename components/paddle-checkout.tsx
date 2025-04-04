"use client";

import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import {Product, products} from "@/app/data";
import usePaddle from "@/hooks/paddle";

type PaddleCheckoutType = {
  children: React.ReactNode;
  product_key?: string;
  className?: string;
};

export default function PaddleCheckout({ children, className, product_key }: PaddleCheckoutType) {
  const paddle = usePaddle();
  const [selectProduct, setSelectProduct] = useState<Product | null>(null);

  // useEffect içinde product_key değiştiğinde ürün seçimini güncelle
  useEffect(() => {
    if (product_key) {
      const product = products.find((item) => item.key === product_key);
      setSelectProduct(product || null); // Eğer ürün bulunamazsa null yap
    }
  }, [product_key]);

  // checkout işlemini başlatan fonksiyon
  const openCheckout = useCallback(() => {
    if (!selectProduct || !paddle) return;

    const paddleEnv = process.env.NEXT_PUBLIC_PADDLE_ENV as "production" | "sandbox" | undefined;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!paddleEnv || !baseUrl) {
      console.error("Paddle environment or base URL is missing");
      return;
    }

    const priceId = selectProduct.paddle_id[paddleEnv];
    if (!priceId) {
      console.error("Product does not have a valid priceId for the selected environment");
      return;
    }

    paddle.Checkout.open({
      settings: {
        // successUrl: `${baseUrl}/thank-you?id=${selectProduct.id}`
      },
      items: [
        {
          priceId,
          quantity: 1
        }
      ]
    });
  }, [selectProduct, paddle]);

  return (
    <div className={cn("inline", className)} onClick={openCheckout}>
      {children}
    </div>
  );
}
