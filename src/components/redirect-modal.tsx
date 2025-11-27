"use client";
import { X } from "lucide-react";

interface RedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RedirectModal = ({ isOpen, onClose }: RedirectModalProps) => {
  if (!isOpen) return null;

  const handleRedirect = () => {
    window.open("https://gen.pro", "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-[4px_20px_28px_0px_rgba(12,21,32,0.14)] p-6 w-[348px] flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[24px] font-medium leading-[30px] text-[#151518]">
            Buy AURA
          </h2>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center"
          >
            <X className="w-3 h-3 text-[#818A95]" />
          </button>
        </div>

        {/* Description */}
        <p className="text-[12px] font-normal leading-5 text-[#151518] w-[300px]">
          Our website is still under development, if you want early access, you
          can buy AURA from our partners at GEN.PRO
        </p>

        {/* Button */}
        <div className="pt-3">
          <button
            onClick={handleRedirect}
            className="w-full bg-[#464654] text-white text-[14px] font-semibold leading-6 px-8 py-3 rounded-[1000px]"
          >
            go to GEN.PRO
          </button>
        </div>
      </div>
    </div>
  );
};
