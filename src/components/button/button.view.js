
import ViewBase from '../../base.view';

export default function ButtonView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Border Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('button.haneul-btn.small', 'Button')),
                        m('.pt-10px', m('button.haneul-btn', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.large', 'Button')),
                        m('.pt-10px', m('button.haneul-btn[disabled]', 'Button')),
                    ])
                ),                 
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Primary Border Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('button.haneul-btn.primary.small', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.primary', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.primary.large', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.primary[disabled]', 'Button')),
                    ])
                ),
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Solid Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('button.haneul-btn.solid.small', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.large', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid[disabled]', 'Button')),
                    ])
                ),
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Status Solid Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('button.haneul-btn.solid.primary.small', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.primary', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.primary.large', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.primary[disabled]', 'Button')),
                        m('.pt-10px', m('p', 'Buttons with other statuses:')),
                        m('.pt-10px', m('button.haneul-btn.solid.secondary', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.success', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.info', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.warning', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.solid.danger', 'Button')),
                    ])
                ),
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Borderless Text Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('button.haneul-btn.borderless.small', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.borderless', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.borderless.large', 'Button')),
                        m('.pt-10px', m('button.haneul-btn.borderless[disabled]', 'Button')),
                    ])
                ),
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Borderless Hyperlink Button'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('button.haneul-hyperlink', 'Hyperlink')),
                        m('.pt-10px', m('button.haneul-hyperlink[disabled]', 'Hyperlink')),
                    ])
                ),
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Segmented Button - Single Select'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('.mb-40px', m('.haneul-segmented-button', [
                            m('label', { for: 'option-1' }, m('input#option-1[checked]', { type: 'radio', name: 'radio-1' }), m('span', 'Option 1')),
                            m('label', { for: 'option-2' }, m('input#option-2', { type: 'radio', name: 'radio-1' }), m('span', 'Option 2')),
                            m('label', { for: 'option-3' }, m('input#option-3', { type: 'radio', name: 'radio-1' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.primary', [
                            m('label', { for: 'option-4' }, m('input#option-4[checked]', { type: 'radio', name: 'radio-2' }), m('span', 'Option 1')),
                            m('label', { for: 'option-5' }, m('input#option-5', { type: 'radio', name: 'radio-2' }), m('span', 'Option 2')),
                            m('label', { for: 'option-6' }, m('input#option-6', { type: 'radio', name: 'radio-2' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.small', [
                            m('label', { for: 'option-7' }, m('input#option-7[checked]', { type: 'radio', name: 'radio-3' }), m('span', 'Option 1')),
                            m('label', { for: 'option-8' }, m('input#option-8', { type: 'radio', name: 'radio-3' }), m('span', 'Option 2')),
                            m('label', { for: 'option-9' }, m('input#option-9', { type: 'radio', name: 'radio-3' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.primary.small', [
                            m('label', { for: 'option-10' }, m('input#option-10[checked]', { type: 'radio', name: 'radio-4' }), m('span', 'Option 1')),
                            m('label', { for: 'option-11' }, m('input#option-11', { type: 'radio', name: 'radio-4' }), m('span', 'Option 2')),
                            m('label', { for: 'option-12' }, m('input#option-12', { type: 'radio', name: 'radio-4' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.disabled', [
                            m('label', { for: 'option-13' }, m('input#option-13[checked]', { type: 'radio', name: 'radio-5' }), m('span', 'Option 1')),
                            m('label', { for: 'option-14' }, m('input#option-14', { type: 'radio', name: 'radio-5' }), m('span', 'Option 2')),
                            m('label', { for: 'option-15' }, m('input#option-15', { type: 'radio', name: 'radio-5' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.primary.disabled', [
                            m('label', { for: 'option-16' }, m('input#option-16[checked]', { type: 'radio', name: 'radio-6' }), m('span', 'Option 1')),
                            m('label', { for: 'option-17' }, m('input#option-17', { type: 'radio', name: 'radio-6' }), m('span', 'Option 2')),
                            m('label', { for: 'option-18' }, m('input#option-18', { type: 'radio', name: 'radio-6' }), m('span', 'Option 3')),
                        ])),
                    ])
                ),
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Segmented Button - Multi Select'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('.mb-40px', m('.haneul-segmented-button', [
                            m('label', { for: 'checkboxoption-1' }, m('input#checkboxoption-1[checked]', { type: 'checkbox', name: 'checkbox-1' }), m('span', 'Option 1')),
                            m('label', { for: 'checkboxoption-2' }, m('input#checkboxoption-2', { type: 'checkbox', name: 'checkbox-1' }), m('span', 'Option 2')),
                            m('label', { for: 'checkboxoption-3' }, m('input#checkboxoption-3', { type: 'checkbox', name: 'checkbox-1' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.primary', [
                            m('label', { for: 'checkboxoption-4' }, m('input#checkboxoption-4[checked]', { type: 'checkbox', name: 'checkbox-2' }), m('span', 'Option 1')),
                            m('label', { for: 'checkboxoption-5' }, m('input#checkboxoption-5', { type: 'checkbox', name: 'checkbox-2' }), m('span', 'Option 2')),
                            m('label', { for: 'checkboxoption-6' }, m('input#checkboxoption-6', { type: 'checkbox', name: 'checkbox-2' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.small', [
                            m('label', { for: 'checkboxoption-7' }, m('input#checkboxoption-7[checked]', { type: 'checkbox', name: 'checkbox-3' }), m('span', 'Option 1')),
                            m('label', { for: 'checkboxoption-8' }, m('input#checkboxoption-8', { type: 'checkbox', name: 'checkbox-3' }), m('span', 'Option 2')),
                            m('label', { for: 'checkboxoption-9' }, m('input#checkboxoption-9', { type: 'checkbox', name: 'checkbox-3' }), m('span', 'Option 3')),
                        ])),
                        m('.mb-40px', m('.haneul-segmented-button.primary.small', [
                            m('label', { for: 'checkboxoption-10' }, m('input#checkboxoption-10[checked]', { type: 'checkbox', name: 'checkbox-4' }), m('span', 'Option 1')),
                            m('label', { for: 'checkboxoption-11' }, m('input#checkboxoption-11', { type: 'checkbox', name: 'checkbox-4' }), m('span', 'Option 2')),
                            m('label', { for: 'checkboxoption-12' }, m('input#checkboxoption-12', { type: 'checkbox', name: 'checkbox-4' }), m('span', 'Option 3')),
                        ])),
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
