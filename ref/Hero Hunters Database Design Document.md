# **Hero Hunters Platform \- Technical Product Design Document**

This document serves as the complete engineering blueprint for building the Hero Hunters Database and Resource Calculator web application. This document is explicitly structured for direct ingestion by Claude or any advanced AI assistant to generate production-ready Next.js code.

## **1\. Executive Summary & Architecture Overview**

The platform is a client-side, zero-database utility site built entirely on **Next.js 14+ (App Router)** and **TypeScript**, styled with **Tailwind CSS**. Because the platform will not use a backend database in its initial phase, all game mechanics, hero data, mathematical scaling formulas, and resource costs will be entirely hardcoded into heavily optimized, strongly-typed TypeScript configuration files. This ensures lightning-fast page transitions, instant calculator updates, and absolute ease of deployment via Vercel or Netlify.

## **2\. Hardcoded Architecture & Data Strategy**

To maintain clean code separation, all static data must reside within a centralized data layer. Claude should generate the application following this file mapping structure:

src/  
├── app/  
│   ├── layout.tsx  
│   ├── page.tsx                  // Homepage Blueprint  
│   ├── calculator/  
│   │   └── page.tsx              // Feature 1: Interactive Stat & Cost Calculator  
│   ├── rankings/  
│   │   └── page.tsx              // Feature 2: Prime Power Leaderboard  
│   └── teams/  
│       └── page.tsx              // Feature 3: Meta Team Configurations  
├── components/  
│   ├── Navbar.tsx  
│   ├── HeroCard.tsx  
│   └── ResourceList.tsx  
└── data/  
    ├── heroes.ts                 // Core Hero Stats, Scaling & Skins Data  
    ├── resources.ts              // Level-by-Level Gold/XP/Gear Requirements  
    └── teams.ts                  // Presaved Meta Team Compositions

### **2.1 Data Models (TypeScript Definitions)**

The data architecture must enforce strict compile-time types. Below are the precise data schemas to be defined in src/data/heroes.ts:

export type HeroRank \= 'Green' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Ruby';

export interface SkinData {  
  id: string;  
  name: string;  
  rarity: 'Common' | 'Rare' | 'Legendary';  
  powerBonus: number; // Flat or percentage power addition  
  statModifiers: {  
    health?: number;  
    damage?: number;  
  };  
}

export interface HeroData {  
  id: string;  
  name: string;  
  class: 'Offense' | 'Defense' | 'Support';  
  element: 'Mechanical' | 'Energy' | 'Biochemical';  
  basePower: number;  
  baseHealth: number;  
  baseDamage: number;  
  baseArmor: number;  
  scaling: {  
    powerPerLevel: number;  
    healthPerLevel: number;  
    damagePerLevel: number;  
    rankMultipliers: Record\<HeroRank, number\>; // e.g., Gold: 1.5, Ruby: 2.8  
  };  
  skills: {  
    id: string;  
    name: string;  
    description: string;  
    basePowerPerLevel: number;  
  }\[\];  
  skins: SkinData\[\];  
}

## **3\. Feature Specifications**

### **3.1 Feature 1: Hero Stats & Resource Calculator**

This interface splits the viewport or layout context into a responsive twin-panel layout (Controls on Left, Outputs/Shopping List on Right).

* **User Inputs:**  
  * Hero Selector: Searchable dropdown component fetching from heroes.ts.  
  * Target Level Slider: Range integer from 1 to 100\.  
  * Target Rank Dropdown: Selection across Green, Bronze, Silver, Gold, Platinum, Ruby.  
  * Skill Level Sliders: Dynamic array of 4 sliders matching the active hero's specific skill names.  
  * Skins Checklist: Toggles for owned skins to automatically append stat modifiers.  
* **Live Calculation Engine Formulas:**  
  * Total Health \= (Base Health \+ (Target Level \* Health Per Level)) \* Rank Multiplier \+ Skin Health Buff  
  * Total Power \= Base Power \+ (Target Level \* Power Per Level) \+ (Combined Skill Levels \* Skill Power Factor) \+ Skin Power Buff  
* **Resource Shopping List Component:**  
  * Calculates accumulated costs by comparing Level 1 data against the target parameters.  
  * Outputs precise quantities for: Total Cash (Gold Coins), Total Hero XP Items required, and specific named Gear Components required for the target rank tier milestone.

### **3.2 Feature 2: Hero Rank Table (The Prime Leaderboard)**

A full-width, highly performant client-side data grid displaying all heroes pre-calculated at their ultimate theoretical max potential ("Prime Ruby Level 100 Form").

| Hero Name | Class / Element | Max Power Level | Max Health Pool | Max DPS Output | Unlock Milestone   |
| :---- | :---- | ----: | ----: | ----: | :---- |
| **Example: Mandrake** | Support / Biochemical | 84,500 | 1,200,000 | 45,000 | 3-Star Campaign or 100 Shards |
| **Example: Flatline** | Defense / Energy | 82,100 | 1,650,000 | 31,000 | PVP Crate Drop Only |

**Technical Implementation Requirements for Claude:** The table column headers must be fully interactive. Clicking a header must dynamically re-sort the state array (ascending/descending) using vanilla JavaScript array sort mechanics. Provide an input filter to instantly filter heroes by Element or Class without causing layout shifting.

### **3.3 Feature 3: Meta Team Compositions**

A curated card interface grouping recommended 5-hero squad pairings optimized for specific meta instances. Each squad card maps out:

* **Categorized Tags:** Explicit operational tags such as \[PVP Defense\], \[Bounty Raid\], or \[Gauntlet Run\].  
* **Synergy Breakdown Text:** A text block explaining the mechanical pairing logic (e.g., "Mandrake's healing field patches up Flatline's taunt damage absorption windows").  
* **Calculator Bridge Link:** A functional button labeled "Load Squad into Calculator" which instantly passes the team payload arrays into the global/local calculator state context to view cumulative squad costs.

## **4\. UI/UX Blueprint for the Next.js Homepage**

The landing page (src/app/page.tsx) will act as the structural launchpad for the system. Code it using a strict mobile-first grid system:

* **Hero Banner:** Dark minimalist theme matching the cyberpunk/military style of Hero Hunters. Features a global autocompleting combobox search bar.  
* **Core Navigation Matrix:** A responsive 3-column grid layout display mapping direct entry links to the Calculator, the Leaderboards, and Team pages. Ensure distinct custom SVG icons illustrate each card interface.  
* **Data Crowdsourcing Banner:** A prominent callout box at the base layout noting: "Missing a scaling formula for a specific Ruby level? Join our Discord community or submit game screenshots to help reverse-engineer the hidden data metrics."

## **5\. System Assembly Prompt for Claude Integration**

Copy and paste the exact prompt provided below directly into Claude to begin the generation process:

"Act as an expert Next.js and frontend engineer. I need you to build a complete Hero Hunters database web platform using Next.js 14+ (App Router), TypeScript, and Tailwind CSS. We are intentionally avoiding any external databases or backend server layers. All hero stats, levels 1-100 scaling metrics, rank multipliers (Green up to Ruby), skill math, skin bonuses, and item gold/XP upgrade shopping lists must be written directly as hardcoded, typed TypeScript structures in a designated data folder.

Please strictly generate the foundational files based on the structural models and features detailed inside this Technical Product Design Document. Begin by outputting the file structure, followed by the complete typed schemas in src/data/heroes.ts, and then build the client-side Interactive Stat Calculator page component ensuring all live states update in real-time."  
