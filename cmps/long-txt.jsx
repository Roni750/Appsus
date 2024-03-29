export function LongTxt({ text, isLongTxtShown, onToggleTxt }) {

    function showTxt(text, isLongTxtShown) {
        if (isLongTxtShown) return text;
        else return text.substr(0, text.lastIndexOf(' ', 97))
    }

    return (
        <section className="long-txt">
            <h4>{showTxt(text, isLongTxtShown) + ' '}
                <a onClick={onToggleTxt}>{isLongTxtShown ? ' Less...' : ' More...'}</a>
            </h4>
        </section>
    );
}