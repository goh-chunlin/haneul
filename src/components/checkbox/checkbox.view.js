
import ViewBase from '../../base.view';

export default function CheckboxView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Checkbox'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('label.haneul-checkbox.no-label', [
                            m('input[checked]', { type: 'checkbox' }),
                            m('span.haneul-checkbox.check')
                        ])),

                        m('.mb-40px', m('label.haneul-checkbox.no-label', [
                            m('input[data-indeterminate=true]', { type: 'checkbox' }),
                            m('span.haneul-checkbox.check')
                        ])),
                        
                        m('.mb-40px', m('label.haneul-checkbox', [
                            m('input', { type: 'checkbox' }),
                            m('span.haneul-checkbox.check', 'Option 1')
                        ])),
                        
                        m('.mb-40px', m('label.haneul-checkbox', [
                            m('input[disabled][checked]', { type: 'checkbox' }),
                            m('span.haneul-checkbox.check', 'Disabled')
                        ])),
                        
                        m('.mb-40px', m('label.haneul-checkbox.small', [
                            m('input', { type: 'checkbox' }),
                            m('span.haneul-checkbox.check', 'Option 1')
                        ])),
                        
                    ])
                ),   
                this.getBaseViews()];
        }
    }
}
