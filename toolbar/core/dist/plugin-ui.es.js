import { c as clsx, a as cn, u as usePlugins } from "./panel-C86duAER.js";
import { P, q, y, T, A, d } from "./panel-C86duAER.js";
import { u } from "./jsx-runtime-BI3iOU20.js";
import { x, k, J, K, _, b, _ as _2, G, t, l, E, H } from "./jsx-runtime-BI3iOU20.js";
const falsyToString = (value) => typeof value == "boolean" ? `${value}` : value === 0 ? "0" : value, cx = clsx, cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config == null ? void 0 : config.variants) == null) return cx(base, props == null ? void 0 : props.class, props == null ? void 0 : props.className);
  const { variants, defaultVariants } = config, getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props == null ? void 0 : props[variant], defaultVariantProp = defaultVariants == null ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  }), propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    return value === void 0 || (acc[key] = value), acc;
  }, {}), getCompoundVariantClassNames = config == null || (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props == null ? void 0 : props.class, props == null ? void 0 : props.className);
}, badgeVariants = cva("rounded-md p-2", {
  variants: {
    color: {
      blue: "",
      green: "",
      red: "",
      yellow: "",
      purple: "",
      orange: "",
      pink: ""
    },
    style: {
      default: "text-white",
      outline: "border text-zinc-950"
    }
  },
  compoundVariants: [
    {
      style: "default",
      color: "blue",
      className: "bg-blue-500"
    },
    {
      style: "default",
      color: "green",
      className: "bg-green-500"
    },
    {
      style: "default",
      color: "red",
      className: "bg-red-500"
    },
    {
      style: "default",
      color: "yellow",
      className: "bg-yellow-500"
    },
    {
      style: "default",
      color: "purple",
      className: "bg-purple-500"
    },
    {
      style: "default",
      color: "orange",
      className: "bg-orange-500"
    },
    {
      style: "default",
      color: "pink",
      className: "bg-pink-500"
    },
    {
      style: "outline",
      color: "blue",
      className: "border-blue-500"
    },
    {
      style: "outline",
      color: "green",
      className: "border-green-500"
    },
    {
      style: "outline",
      color: "red",
      className: "border-red-500"
    },
    {
      style: "outline",
      color: "yellow",
      className: "border-yellow-500"
    },
    {
      style: "outline",
      color: "purple",
      className: "border-purple-500"
    },
    {
      style: "outline",
      color: "orange",
      className: "border-orange-500"
    },
    {
      style: "outline",
      color: "pink",
      className: "border-pink-500"
    }
  ],
  defaultVariants: {
    color: "blue",
    style: "default"
  }
});
function Badge({ children, color, style, className }) {
  return /* @__PURE__ */ u("span", { className: cn(badgeVariants({ color, style }), className), children });
}
function Button({
  children,
  style = "primary",
  size = "md",
  asChild,
  ...props
}) {
  return asChild ? /* @__PURE__ */ u("button", { ...props, className: "cursor-pointer", children }) : /* @__PURE__ */ u(
    "button",
    {
      ...props,
      className: cn(
        "flex h-12 cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-medium text-sm text-white",
        size === "sm" && "h-8",
        size === "md" && "h-12",
        size === "lg" && "h-16",
        style === "primary" && "bg-blue-600",
        style === "secondary" && "bg-zinc-500/40",
        style === "outline" && "border border-zinc-500 bg-white text-blue-500",
        style === "ghost" && "bg-transparent text-blue-500"
      ),
      type: "submit",
      children
    }
  );
}
const useToolbar = () => usePlugins().toolbarContext;
export {
  Badge,
  Button,
  x as Component,
  k as Fragment,
  P as Panel,
  J as cloneElement,
  K as createContext,
  _ as createElement,
  b as createRef,
  _2 as h,
  G as hydrate,
  t as isValidElement,
  l as options,
  E as render,
  H as toChildArray,
  q as useCallback,
  y as useEffect,
  T as useMemo,
  A as useRef,
  d as useState,
  useToolbar
};
