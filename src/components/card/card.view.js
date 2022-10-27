
import ViewBase from '../../base.view';

export default function CardView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Card'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-card', { style: 'width: 304px; height: 296px' }, [
                            m('.header', m('strong', 'Secondary Text')),
                            m('h5.title', 'Hello World'),
                            m('p.body', 'This is just a testing text. This is just a testing text.'),
                            m('.footer', [
                                m('span', 'Lim Ah Kao'),
                                m('span.divider'),
                                m('span', '10 Aug 2022')
                            ])
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
