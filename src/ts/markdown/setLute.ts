export const setLute = (options: ILuteOptions) => {
    const lute: Lute = Lute.New();
    lute.PutEmojis(options.emojis);
    lute.SetEmojiSite(options.emojiSite);
    lute.SetHeadingAnchor(options.headingAnchor);
    lute.SetInlineMathAllowDigitAfterOpenMarker(options.inlineMathDigit);
    lute.SetAutoSpace(options.autoSpace);
    lute.SetToC(options.toc);
    lute.SetFootnotes(options.footnotes);
    lute.SetChinesePunct(options.chinesePunct);
    lute.SetFixTermTypo(options.fixTermTypo);
    lute.SetVditorCodeBlockPreview(options.codeBlockPreview);
    lute.SetSanitize(options.sanitize);
    lute.SetChineseParagraphBeginningSpace(options.paragraphBeginningSpace);
    lute.SetRenderListStyle(options.listStyle);
    lute.SetLinkBase(options.linkBase);
    lute.SetMark(options.mark);
    if (options.lazyLoadImage) {
        lute.SetImageLazyLoading(options.lazyLoadImage);
    }
    return lute;
};
