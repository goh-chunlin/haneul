
import ViewBase from '../../base.view';

export default function SwitchView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Switch'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('label.haneul-switch', [
                            m('input', { type: 'checkbox' }),
                            m('span')
                        ])),

                        m('.mb-40px', m('label.haneul-switch', [
                            m('input[checked]', { type: 'checkbox' }),
                            m('span')
                        ])),

                        m('.mb-40px', m('label.haneul-switch', [
                            m('input[disabled]', { type: 'checkbox' }),
                            m('span')
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
