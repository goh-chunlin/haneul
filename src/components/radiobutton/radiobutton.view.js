
import ViewBase from '../../base.view';

export default function RadioButtonView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Radio Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('label.haneul-radio-button.no-label', [
                            m('input', { type: 'radio', name: 'radio1' }),
                            m('span')
                        ])),

                        m('.mb-40px', m('label.haneul-radio-button', [
                            m('input', { type: 'radio', name: 'radio1' }),
                            m('span', 'Option 2')
                        ])),

                        m('.mb-40px', m('label.haneul-radio-button', [
                            m('input[disabled]', { type: 'radio', name: 'radio1' }),
                            m('span', 'Disabled')
                        ])),

                        m('.mb-40px', m('label.haneul-radio-button', [
                            m('input[disabled][checked]', { type: 'radio', name: 'radio2' }),
                            m('span', 'Disabled')
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
