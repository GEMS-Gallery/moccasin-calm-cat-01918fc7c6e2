import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Feature {
  'title' : string,
  'icon' : string,
  'description' : string,
}
export interface ShowcaseItem {
  'title' : string,
  'description' : string,
  'imageUrl' : string,
  'ctaText' : string,
}
export interface _SERVICE {
  'getFeatures' : ActorMethod<[], Array<Feature>>,
  'getInfo' : ActorMethod<[], string>,
  'getShowcaseItems' : ActorMethod<[], Array<ShowcaseItem>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
