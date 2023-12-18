'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nextbuild documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminPageModule.html" data-type="entity-link" >AdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminPageModule-5c7383f96163868c543be664ea34935a86f5415ab0844a5fe75a1bad32024b8d2ef526de3f7b21ebb581c38f2fc485aefbe58c20ba40bcc799e9d92225901bd2"' : 'data-bs-target="#xs-components-links-module-AdminPageModule-5c7383f96163868c543be664ea34935a86f5415ab0844a5fe75a1bad32024b8d2ef526de3f7b21ebb581c38f2fc485aefbe58c20ba40bcc799e9d92225901bd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminPageModule-5c7383f96163868c543be664ea34935a86f5415ab0844a5fe75a1bad32024b8d2ef526de3f7b21ebb581c38f2fc485aefbe58c20ba40bcc799e9d92225901bd2"' :
                                            'id="xs-components-links-module-AdminPageModule-5c7383f96163868c543be664ea34935a86f5415ab0844a5fe75a1bad32024b8d2ef526de3f7b21ebb581c38f2fc485aefbe58c20ba40bcc799e9d92225901bd2"' }>
                                            <li class="link">
                                                <a href="components/AdminPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminPageRoutingModule.html" data-type="entity-link" >AdminPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-ef50845d249c7de6e6122bc14da399cb192c1e6f91acc531aaa3d92d5b6031d4285dc8b8011c92a635683d96ec78772a6b4670053da6eca2cd2aeb620b613249"' : 'data-bs-target="#xs-components-links-module-AppModule-ef50845d249c7de6e6122bc14da399cb192c1e6f91acc531aaa3d92d5b6031d4285dc8b8011c92a635683d96ec78772a6b4670053da6eca2cd2aeb620b613249"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ef50845d249c7de6e6122bc14da399cb192c1e6f91acc531aaa3d92d5b6031d4285dc8b8011c92a635683d96ec78772a6b4670053da6eca2cd2aeb620b613249"' :
                                            'id="xs-components-links-module-AppModule-ef50845d249c7de6e6122bc14da399cb192c1e6f91acc531aaa3d92d5b6031d4285dc8b8011c92a635683d96ec78772a6b4670053da6eca2cd2aeb620b613249"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link" >DashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardPageModule-c7e89c7a0d47b9eaf74c7e290a0b37da893f56ee1753b1b2db2a18d05c134df4fa12dea03fa7c37bf21d3b39038be6ef7901e18bfc412983c15ab9fafb81b408"' : 'data-bs-target="#xs-components-links-module-DashboardPageModule-c7e89c7a0d47b9eaf74c7e290a0b37da893f56ee1753b1b2db2a18d05c134df4fa12dea03fa7c37bf21d3b39038be6ef7901e18bfc412983c15ab9fafb81b408"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardPageModule-c7e89c7a0d47b9eaf74c7e290a0b37da893f56ee1753b1b2db2a18d05c134df4fa12dea03fa7c37bf21d3b39038be6ef7901e18bfc412983c15ab9fafb81b408"' :
                                            'id="xs-components-links-module-DashboardPageModule-c7e89c7a0d47b9eaf74c7e290a0b37da893f56ee1753b1b2db2a18d05c134df4fa12dea03fa7c37bf21d3b39038be6ef7901e18bfc412983c15ab9fafb81b408"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageRoutingModule.html" data-type="entity-link" >DashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EditPageModule.html" data-type="entity-link" >EditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EditPageModule-d54fd97e4b10f8981e1f8e12578de03de6892e7e4316fa73d3fa15dab35f8ac40eb442056069a717138fb9fa52de70e9d0379b2be292fbcf896890e937a8efb9"' : 'data-bs-target="#xs-components-links-module-EditPageModule-d54fd97e4b10f8981e1f8e12578de03de6892e7e4316fa73d3fa15dab35f8ac40eb442056069a717138fb9fa52de70e9d0379b2be292fbcf896890e937a8efb9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditPageModule-d54fd97e4b10f8981e1f8e12578de03de6892e7e4316fa73d3fa15dab35f8ac40eb442056069a717138fb9fa52de70e9d0379b2be292fbcf896890e937a8efb9"' :
                                            'id="xs-components-links-module-EditPageModule-d54fd97e4b10f8981e1f8e12578de03de6892e7e4316fa73d3fa15dab35f8ac40eb442056069a717138fb9fa52de70e9d0379b2be292fbcf896890e937a8efb9"' }>
                                            <li class="link">
                                                <a href="components/EditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditPageRoutingModule.html" data-type="entity-link" >EditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'data-bs-target="#xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameChoicePageModule.html" data-type="entity-link" >GameChoicePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GameChoicePageModule-fc3ff8265d46c4fdb5e2e0cb5605e149863472851aeac06972879053d67d032be835fb3d3a7017f1a321e992f8956c4badd0ffab472bb3c6380586cd29876a10"' : 'data-bs-target="#xs-components-links-module-GameChoicePageModule-fc3ff8265d46c4fdb5e2e0cb5605e149863472851aeac06972879053d67d032be835fb3d3a7017f1a321e992f8956c4badd0ffab472bb3c6380586cd29876a10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameChoicePageModule-fc3ff8265d46c4fdb5e2e0cb5605e149863472851aeac06972879053d67d032be835fb3d3a7017f1a321e992f8956c4badd0ffab472bb3c6380586cd29876a10"' :
                                            'id="xs-components-links-module-GameChoicePageModule-fc3ff8265d46c4fdb5e2e0cb5605e149863472851aeac06972879053d67d032be835fb3d3a7017f1a321e992f8956c4badd0ffab472bb3c6380586cd29876a10"' }>
                                            <li class="link">
                                                <a href="components/GameChoicePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameChoicePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameChoicePageRoutingModule.html" data-type="entity-link" >GameChoicePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GraphicsCardChoicePageModule.html" data-type="entity-link" >GraphicsCardChoicePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GraphicsCardChoicePageModule-83011aec951f8b8a1d5306476c98ae221e9697b96eec85ad27d26265dd3cd99dec03fcb5e40fde41dbe3f81b266e7bf2af775cb4ac141a13dcd87a2a67812efe"' : 'data-bs-target="#xs-components-links-module-GraphicsCardChoicePageModule-83011aec951f8b8a1d5306476c98ae221e9697b96eec85ad27d26265dd3cd99dec03fcb5e40fde41dbe3f81b266e7bf2af775cb4ac141a13dcd87a2a67812efe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GraphicsCardChoicePageModule-83011aec951f8b8a1d5306476c98ae221e9697b96eec85ad27d26265dd3cd99dec03fcb5e40fde41dbe3f81b266e7bf2af775cb4ac141a13dcd87a2a67812efe"' :
                                            'id="xs-components-links-module-GraphicsCardChoicePageModule-83011aec951f8b8a1d5306476c98ae221e9697b96eec85ad27d26265dd3cd99dec03fcb5e40fde41dbe3f81b266e7bf2af775cb4ac141a13dcd87a2a67812efe"' }>
                                            <li class="link">
                                                <a href="components/GraphicsCardChoicePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GraphicsCardChoicePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphicsCardChoicePageRoutingModule.html" data-type="entity-link" >GraphicsCardChoicePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MultitaskPageModule.html" data-type="entity-link" >MultitaskPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MultitaskPageModule-7b622e7e29dd22f95af8cc6e3c66967d4a5065bac1760696a02f08aa200b1c8dd353e8d34c5f1ca92e52ef8180eced17ec08815202ef780dc9770e1f88d6c6c1"' : 'data-bs-target="#xs-components-links-module-MultitaskPageModule-7b622e7e29dd22f95af8cc6e3c66967d4a5065bac1760696a02f08aa200b1c8dd353e8d34c5f1ca92e52ef8180eced17ec08815202ef780dc9770e1f88d6c6c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MultitaskPageModule-7b622e7e29dd22f95af8cc6e3c66967d4a5065bac1760696a02f08aa200b1c8dd353e8d34c5f1ca92e52ef8180eced17ec08815202ef780dc9770e1f88d6c6c1"' :
                                            'id="xs-components-links-module-MultitaskPageModule-7b622e7e29dd22f95af8cc6e3c66967d4a5065bac1760696a02f08aa200b1c8dd353e8d34c5f1ca92e52ef8180eced17ec08815202ef780dc9770e1f88d6c6c1"' }>
                                            <li class="link">
                                                <a href="components/MultitaskPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultitaskPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MultitaskPageRoutingModule.html" data-type="entity-link" >MultitaskPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResultaterPageModule.html" data-type="entity-link" >ResultaterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ResultaterPageModule-726211c76f31948ac4c472ee6cdadf2ac99e729041bb160100ca7559ff1d87704d43fde7863c09f022344a7ea96efe8fb4422b9b4018702227bce605b5aa9e96"' : 'data-bs-target="#xs-components-links-module-ResultaterPageModule-726211c76f31948ac4c472ee6cdadf2ac99e729041bb160100ca7559ff1d87704d43fde7863c09f022344a7ea96efe8fb4422b9b4018702227bce605b5aa9e96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultaterPageModule-726211c76f31948ac4c472ee6cdadf2ac99e729041bb160100ca7559ff1d87704d43fde7863c09f022344a7ea96efe8fb4422b9b4018702227bce605b5aa9e96"' :
                                            'id="xs-components-links-module-ResultaterPageModule-726211c76f31948ac4c472ee6cdadf2ac99e729041bb160100ca7559ff1d87704d43fde7863c09f022344a7ea96efe8fb4422b9b4018702227bce605b5aa9e96"' }>
                                            <li class="link">
                                                <a href="components/ResultaterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultaterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultaterPageRoutingModule.html" data-type="entity-link" >ResultaterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SavePageModule.html" data-type="entity-link" >SavePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SavePageModule-761d21b747472f9880177d9bea783e98532fd2a5af33fa6bb1f7251559fd3562096ee13ab0a81a44ef950015c9d7609812e97b54fa4db890a2a5eddaf28173cd"' : 'data-bs-target="#xs-components-links-module-SavePageModule-761d21b747472f9880177d9bea783e98532fd2a5af33fa6bb1f7251559fd3562096ee13ab0a81a44ef950015c9d7609812e97b54fa4db890a2a5eddaf28173cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SavePageModule-761d21b747472f9880177d9bea783e98532fd2a5af33fa6bb1f7251559fd3562096ee13ab0a81a44ef950015c9d7609812e97b54fa4db890a2a5eddaf28173cd"' :
                                            'id="xs-components-links-module-SavePageModule-761d21b747472f9880177d9bea783e98532fd2a5af33fa6bb1f7251559fd3562096ee13ab0a81a44ef950015c9d7609812e97b54fa4db890a2a5eddaf28173cd"' }>
                                            <li class="link">
                                                <a href="components/SavePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SavePageRoutingModule.html" data-type="entity-link" >SavePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SSDChoicePageModule.html" data-type="entity-link" >SSDChoicePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SSDChoicePageModule-ac54608265b6a7f597ab1dad12414b312a661a7c5b7bf4b0bfda62085fc82a16ab7d9b5b23efa0190fb16360818bb1456035dc0100854bc6b9c7a0e26e0a5243"' : 'data-bs-target="#xs-components-links-module-SSDChoicePageModule-ac54608265b6a7f597ab1dad12414b312a661a7c5b7bf4b0bfda62085fc82a16ab7d9b5b23efa0190fb16360818bb1456035dc0100854bc6b9c7a0e26e0a5243"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SSDChoicePageModule-ac54608265b6a7f597ab1dad12414b312a661a7c5b7bf4b0bfda62085fc82a16ab7d9b5b23efa0190fb16360818bb1456035dc0100854bc6b9c7a0e26e0a5243"' :
                                            'id="xs-components-links-module-SSDChoicePageModule-ac54608265b6a7f597ab1dad12414b312a661a7c5b7bf4b0bfda62085fc82a16ab7d9b5b23efa0190fb16360818bb1456035dc0100854bc6b9c7a0e26e0a5243"' }>
                                            <li class="link">
                                                <a href="components/SSDChoicePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SSDChoicePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SSDChoicePageRoutingModule.html" data-type="entity-link" >SSDChoicePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab1PageModule-0a877889504d2e2502875af35b4701e5c2ce42b836125b31875ec91b1b6ef84b424daf528155b7f215e728bf68a632bbc40e0fbbc6bdc112d75fb3adc1b2ad3d"' : 'data-bs-target="#xs-components-links-module-Tab1PageModule-0a877889504d2e2502875af35b4701e5c2ce42b836125b31875ec91b1b6ef84b424daf528155b7f215e728bf68a632bbc40e0fbbc6bdc112d75fb3adc1b2ad3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-0a877889504d2e2502875af35b4701e5c2ce42b836125b31875ec91b1b6ef84b424daf528155b7f215e728bf68a632bbc40e0fbbc6bdc112d75fb3adc1b2ad3d"' :
                                            'id="xs-components-links-module-Tab1PageModule-0a877889504d2e2502875af35b4701e5c2ce42b836125b31875ec91b1b6ef84b424daf528155b7f215e728bf68a632bbc40e0fbbc6bdc112d75fb3adc1b2ad3d"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab2PageModule-9a9ff676eee8dd6d107ae49eb6a789e2d6690728a8d2a7e6186a18bb608d2840d911bf5762ef69a21ec02569abe4449a1cf5dde4474379fd871d0f7e46aaa05b"' : 'data-bs-target="#xs-components-links-module-Tab2PageModule-9a9ff676eee8dd6d107ae49eb6a789e2d6690728a8d2a7e6186a18bb608d2840d911bf5762ef69a21ec02569abe4449a1cf5dde4474379fd871d0f7e46aaa05b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-9a9ff676eee8dd6d107ae49eb6a789e2d6690728a8d2a7e6186a18bb608d2840d911bf5762ef69a21ec02569abe4449a1cf5dde4474379fd871d0f7e46aaa05b"' :
                                            'id="xs-components-links-module-Tab2PageModule-9a9ff676eee8dd6d107ae49eb6a789e2d6690728a8d2a7e6186a18bb608d2840d911bf5762ef69a21ec02569abe4449a1cf5dde4474379fd871d0f7e46aaa05b"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' : 'data-bs-target="#xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' :
                                            'id="xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' : 'data-bs-target="#xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' :
                                            'id="xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PcComponentService.html" data-type="entity-link" >PcComponentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PcComponent.html" data-type="entity-link" >PcComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});