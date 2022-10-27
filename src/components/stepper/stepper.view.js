
import ViewBase from '../../base.view';

export default function StepperView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Stepper'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('label.haneul-stepper', [
                            m('input', {
                                type: 'number',
                                value: 0,
                                min: 0,
                                max: 60
                            }),
                            m('button.increase-button'),
                            m('button.decrease-button')
                        ])),

                        m('.mb-40px', m('label.haneul-stepper', [
                            m('input[readonly][disabled]', {
                                type: 'number',
                                value: 0,
                                min: 0,
                                max: 60
                            }),
                            m('button.increase-button'),
                            m('button.decrease-button')
                        ])),

                        m('.mb-40px', m('label.haneul-stepper-horizontal', [
                            m('input.input', {
                                type: 'number',
                                value: 0,
                                min: 0,
                                max: 60
                            }),
                            m('button.increase-button'),
                            m('button.decrease-button')
                        ])),

                        m('.mb-40px', m('label.haneul-stepper-horizontal', [
                            m('input.input[readonly][disabled]', {
                                type: 'number',
                                value: 0,
                                min: 0,
                                max: 60
                            }),
                            m('button.increase-button'),
                            m('button.decrease-button')
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
