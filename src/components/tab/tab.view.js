
import ViewBase from '../../base.view';

export default function TabView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Tab'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-tab', { style: 'width: 700px' }, [
                            m('.tab-area', [
                                m('button.selected', { 'data-tab-index': 1 }, 'Tab 1'),
                                m('button', { 'data-tab-index': 2 }, 'Tab 2'),
                                m('button', { 'data-tab-index': 3 }, 'Tab 3'),
                            ]),
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
