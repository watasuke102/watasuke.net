// Twitterカード表示のため、metaタグを上に持っていく
// https://kakkiii-blog.dev/posts/510/

exports.onPreRenderHTML = function onPreRenderHTML({getHeadComponents, replaceHeadComponents}) {
  const headComponents = getHeadComponents().sort((a, b) => {
    if (a.type === 'meta') return -1;
    if (b.type === 'meta') return 1;
    return 0;
  });

  replaceHeadComponents(headComponents);
};
