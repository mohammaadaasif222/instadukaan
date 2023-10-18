import React from "react";
import RootLayout from "@/components/Layout";
import HomePage from "@/components/HomePage";
import '../globals.css'


function MyApp() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}

export default MyApp;
