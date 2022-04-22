/*
       __ _ _ __  _   _
      / _` | '_ \| | | |
     | (_| | | | | |_| |
      \__,_|_| |_|\__, |
                   __/ |
                  |___/
*/
declare let anyVar: any;

export let otherVar:number = anyVar;

anyVar = otherVar;

export type U = number | any;
export type I = number & any;

// any ~ 🍌
