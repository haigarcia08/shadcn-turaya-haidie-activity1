import * as React from "react";
import { Html, Button, Text, Container } from "@react-email/components";

type Props = {
  data: any;
};

export default function NewSaleEmail({ data }: Props) {
  return (
    <Html lang="en">
      <Container style={{ backgroundColor: "#f7f7f7", paddingLeft: 12, paddingRight: 12 }}>
        <Text style={{ paddingLeft: 12, paddingRight: 12 }}>Customer: {data.customerEmail}</Text>
        <Text style={{ paddingLeft: 12, paddingRight: 12 }}>Product: {data.productName}</Text>
        <Text style={{ paddingLeft: 12, paddingRight: 12 }}>Price: {data.price}</Text>
      </Container>
    </Html>
  );
}
