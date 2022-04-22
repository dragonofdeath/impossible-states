/*

      _ __   _____   _____ _ __
     | '_ \ / _ \ \ / / _ \ '__|
     | | | |  __/\ V /  __/ |
     |_| |_|\___| \_/ \___|_|
*/

declare let neverVar: never;

export let otherVar: number = neverVar;

neverVar = otherVar;

export type Union = number | never
export type Intersection = number & never

// never ~ 0
