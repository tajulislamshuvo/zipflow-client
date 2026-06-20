import React from "react";
import { ArrowRight } from "lucide-react";

const ActionCard = ({
  title,
  description,
  icon: Icon,
  buttonText = "Explore",
  onClick,
}) => {
  return (
    <div className="group rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
        {Icon && <Icon className="h-7 w-7 text-primary" />}
      </div>

      <h3 className="mb-2 text-xl font-semibold">{title}</h3>

      <p className="mb-6 text-sm leading-relaxed text-base-content/70">
        {description}
      </p>

      <button
        onClick={onClick}
        className="btn text-black/80 btn-primary btn-sm gap-2"
      >
        {buttonText}
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ActionCard;
