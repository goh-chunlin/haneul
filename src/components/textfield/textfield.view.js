
import ViewBase from '../../base.view';

export default function TextFieldView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Text Fields'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('input.haneul-text-field', { type: 'text', placeholder: 'Hint Text' })),

                        m('.mb-40px', m('input.haneul-text-field[readonly]', { type: 'text', value: 'Read Only' })),

                        m('.mb-40px', m('.haneul-text-field-status-wrapper[data-success-msg="Success message"]', [
                            m('input.haneul-text-field', { type: 'text', value: 'valid text' })
                        ])),

                        m('.mb-40px', m('.haneul-text-field-status-wrapper[data-err-msg="Error message"]', [
                            m('input.haneul-text-field', { type: 'text', value: 'invalid text' })
                        ])),

                        m('.mb-40px', m('input.haneul-text-field', { type: 'password', placeholder: 'Password here' })),

                        m('.mb-40px', m('.haneul-text-field-status-wrapper[data-err-msg="Error message"]', [
                            m('input.haneul-text-field', { type: 'password', value: 'invalid password' })
                        ])),

                        m('.mb-40px', m('textarea.haneul-text-field', { placeholder: 'Hint Text' })),
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
