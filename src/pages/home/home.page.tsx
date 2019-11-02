import React from "react";
import AppLayout from "../../layout/default";
import { RoutedContent } from "../../routes";

const HomePage = () => {
  return (
    <div>
      <AppLayout>
        <RoutedContent />
      </AppLayout>
    </div>
  );
};

export default HomePage;
