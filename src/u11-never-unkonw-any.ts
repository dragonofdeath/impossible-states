/*

      _ __   _____   _____ _ __
     | '_ \ / _ \ \ / / _ \ '__|
     | | | |  __/\ V /  __/ |
     |_| |_|\___| \_/ \___|_|
*/

declare let neverVar: never;

export let otherVar: number = neverVar;

neverVar = otherVar;

export type U = number | never
export type I = number & never

// never ~ 0
