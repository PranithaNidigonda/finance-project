import {
  LayoutDashboard, Landmark, ArrowLeftRight, Tags, Wallet, Scale,
  BarChart3, Bot, TrendingDown, Coins, ShieldCheck,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, ready: true },
  { label: "Accounts", href: "/accounts", icon: Landmark, ready: false, phase: 2 },
  { label: "Transactions", href: "/transactions", icon: ArrowLeftRight, ready: false, phase: 3 },
  { label: "Categories", href: "/categories", icon: Tags, ready: false, phase: 4 },
  { label: "Income", href: "/income", icon: Wallet, ready: false, phase: 5 },
  { label: "Net Worth", href: "/wealth", icon: Scale, ready: false, phase: 6 },
  { label: "Analytics", href: "/analytics", icon: BarChart3, ready: false, phase: 7 },
  { label: "AI Assistant", href: "/assistant", icon: Bot, ready: false, phase: 8 },
  { label: "Debt Planner", href: "/debt", icon: TrendingDown, ready: false, phase: 10 },
  { label: "Markets", href: "/market", icon: Coins, ready: false, phase: 11 },
  { label: "Privacy", href: "/privacy", icon: ShieldCheck, ready: false, phase: 13 },
];