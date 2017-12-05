import React, { Component } from 'react';
import PropTypes from 'prop-types';

import uuidv4 from './uuidv4';
import environment from './environment';
import * as environmentConstant from '../configs/environments';

export default ({ modelMapper, actionMapper }) => {
    return (WrappedComponent) => {
        if (typeof modelMapper !== 'function') {
            throw new Error('Domain modelMapper should be function');
        }

        if (typeof actionMapper !== 'function') {
            throw new Error('Domain actionMapper should be function');
        }

        const getDisplayName = (_WrappedComponent) => {
            return _WrappedComponent.displayName ||
                _WrappedComponent.name ||
                'Component';
        };

        class SubDomainComponent extends Component {
            static displayName = `HOC_${getDisplayName(WrappedComponent)}`;

            constructor(props) {
                super(props);
                this.state = {};
                this._uniqueCompId = `${WrappedComponent.name}'$$'${uuidv4()}`;
                this.wrappedComponentInstance = null;
            }

            componentWillMount() {
                this.domain = this.context.domain;
                this.modelMapperPorps = modelMapper(this.domain.getCurrentModel());

                if (this.modelMapperPorps !== undefined) {
                    this.domain.components.push(this._uniqueCompId);
                    this.domain.eventBus.subscribe(`${this._uniqueCompId}@@MODEL_UPDATE`, () => {
                        if (environment === environmentConstant.DEVELOPMENT) {
                            console.log(`@@MODEL_UPDATE in ${this._uniqueCompId}`);
                        }

                        const newModelMapperPorps = modelMapper(this.domain.getCurrentModel());

                        if (JSON.stringify(this.modelMapperPorps) !== JSON.stringify(newModelMapperPorps)) {
                            this.modelMapperPorps = newModelMapperPorps;
                            this.setState({});
                        }
                    });
                }
            }

            componentWillUnmount() {
                if (this.modelMapperPorps !== undefined) {
                    const found = this.domain.components.indexOf(this._uniqueCompId);
                    this.domain.components.splice(found, 1);
                    this.domain.eventBus.unsubscribe(`${this._uniqueCompId}@@MODEL_UPDATE`);
                }
            }

            render() {
                const { action } = this.domain;
                return (<WrappedComponent
                  ref={(instance) => { this.wrappedComponentInstance = instance; }}
                  {...this.props}
                  {...this.modelMapperPorps}
                  {...actionMapper(action)}
                />);
            }
        }

        SubDomainComponent.contextTypes = {
            domain: PropTypes.object
        };

        return SubDomainComponent;
    };
};
