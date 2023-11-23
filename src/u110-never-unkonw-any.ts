/*                _
                 | |
      _   _ _ __ | | ___ __   _____      ___ __
     | | | | '_ \| |/ / '_ \ / _ \ \ /\ / / '_ \
     | |_| | | | |   <| | | | (_) \ V  V /| | | |
      \__,_|_| |_|_|\_\_| |_|\___/ \_/\_/ |_| |_|
*/

declare let unknownVar: unknown;

export let otherVar: number = unknownVar;

unknownVar = otherVar;

export type U = number | unknown;
export type I = number & unknown;

// unknown ~ infinity
