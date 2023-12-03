import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className,
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 タスク管理
        </div>
        <h1 className="text-xl md:text-2xl text-center text-neutral-800 mb-6">
          Taskify でタスクをまとめましょう
        </h1>
        <div className="text-xl md:text-2xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 pt-4 pb-4 rounded-md w-fit">
          生産性向上のためのツール
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className,
        )}
      >
        シンプルかつ柔軟で強力なツール。ボード、リスト、カードがあれば、誰が何を行っているか、完了すべきことは何かを明確に把握できます。
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Taskifyをはじめよう</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
