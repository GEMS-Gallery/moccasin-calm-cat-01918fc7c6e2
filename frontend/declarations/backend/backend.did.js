export const idlFactory = ({ IDL }) => {
  const Feature = IDL.Record({
    'title' : IDL.Text,
    'icon' : IDL.Text,
    'description' : IDL.Text,
  });
  const ShowcaseItem = IDL.Record({
    'title' : IDL.Text,
    'description' : IDL.Text,
    'imageUrl' : IDL.Text,
    'ctaText' : IDL.Text,
  });
  return IDL.Service({
    'getFeatures' : IDL.Func([], [IDL.Vec(Feature)], ['query']),
    'getInfo' : IDL.Func([], [IDL.Text], ['query']),
    'getShowcaseItems' : IDL.Func([], [IDL.Vec(ShowcaseItem)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
