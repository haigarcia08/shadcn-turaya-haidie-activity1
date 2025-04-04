import * as React from "react";
import { Html, Button, Text, Container } from "@react-email/components";

type Props = {
  payment_email: string;
  github_email: string;
  project_name: string;
};

export default function EmailGithubAccess({ github_email, payment_email, project_name }: Props) {
  return (
    <Html lang="en">
      <Container style={{ backgroundColor: "#000000", paddingLeft: 12, paddingRight: 12 }}>
        <Text style={{ color: "rgb(255,255,255)", paddingLeft: 12, paddingRight: 12 }}>
          Github Email: {github_email}
        </Text>
        <Text style={{ color: "rgb(255,255,255)", paddingLeft: 12, paddingRight: 12 }}>
          Payment Email: {payment_email}
        </Text>
        <Text style={{ color: "rgb(255,255,255)", paddingLeft: 12, paddingRight: 12 }}>
          Projec name: {project_name}
        </Text>
      </Container>
    </Html>
  );
}
