import * as React from "react";
import { Html, Button, Text, Container } from "@react-email/components";

type Props = {
  data: any;
};

export default function NewSaleEmailCustomer({ data }: Props) {
  return (
    <Html lang="en">
      <Container style={{ backgroundColor: "#f7f7f7", paddingLeft: 12, paddingRight: 12 }}>
        <Text style={{ fontSize: 18, paddingRight: 12 }}>Thank you for payment!</Text>
        <Text>Your payment was completed successfully. Here are the details:</Text>
        <Text>Product: {data.productName}</Text>
        <Text>Price: {data.price}</Text>
        <Text>License Key: {data.license_key}</Text>
        <Container style={{ borderTop: "1px solid #cccccc", paddingTop: 12 }}>
          <Text style={{ fontSize: 14 }}>
            You can create a request to access the source code of dashboard and website templates.
            This process is done automatically. The email address you used when purchasing is
            considered your Github email address. If you use a different email on Github, you will
            need to create a request.{" "}
          </Text>
          <Text style={{ fontSize: 14 }}>
            You can use the license key to unlock components and blocks on the website.
          </Text>
        </Container>
        <Button
          href="https://shadcnuikit.com/github-access"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: 12,
            fontWeight: 600,
            borderRadius: 8,
            marginTop: 20,
            textAlign: "center",
            backgroundColor: "rgb(79,70,229)",
            color: "rgb(255,255,255)"
          }}>
          Create Access Request
        </Button>
      </Container>
    </Html>
  );
}
