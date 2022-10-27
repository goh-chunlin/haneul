import { Spinner } from 'construct-ui';

export default function ViewBase() {

    this._isLoading = false;
    
    this.showLoading = () => {
        this._isLoading = true;
    }

    this.hideLoading = () => {
        this._isLoading = false;
    }

    this.getBaseViews = () => {
        return [
            this._isLoading && m(Spinner, {
                active: this._isLoading,
                background: true,
                fill: true,
                size: 'xl',
            }),
        ];
    }

} 