import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            プライバシーポリシー
          </Button>
          <Button size="sm" variant="ghost">
            利用規約
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
