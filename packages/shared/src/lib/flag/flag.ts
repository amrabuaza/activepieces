import { BaseModel } from '../common/base-model'
import { ApId } from '../common/id-generator'

export type FlagId = ApId

export type Flag = {
    value: unknown
} & BaseModel<FlagId>

export enum ApEnvironment {
    PRODUCTION = 'prod',
    DEVELOPMENT = 'dev',
    TESTING = 'test',
}

export enum ApEdition {
    COMMUNITY = 'ce',
    ENTERPRISE = 'ee',
    CLOUD = 'cloud',
}

export enum ApFlagId {
    BILLING_ENABLED = 'BILLING_ENABLED',
    CLOUD_AUTH_ENABLED = 'CLOUD_AUTH_ENABLED',
    OWN_AUTH2_ENABLED = 'OWN_AUTH2_ENABLED',
    CURRENT_VERSION = 'CURRENT_VERSION',
    EDITION = 'EDITION',
    ENVIRONMENT = 'ENVIRONMENT',
    FRONTEND_URL = 'FRONTEND_URL',
    LATEST_VERSION = 'LATEST_VERSION',
    PLATFORM_CREATED = 'PLATFORM_CREATED',
    PRIVATE_PIECES_ENABLED = 'PRIVATE_PIECES_ENABLED',
    PROJECT_MEMBERS_ENABLED = 'PROJECT_MEMBERS_ENABLED',
    SANDBOX_RUN_TIME_SECONDS = 'SANDBOX_RUN_TIME_SECONDS',
    THIRD_PARTY_AUTH_PROVIDER_REDIRECT_URL = 'THIRD_PARTY_AUTH_PROVIDER_REDIRECT_URL',
    THIRD_PARTY_AUTH_PROVIDERS_TO_SHOW_MAP = 'THIRD_PARTY_AUTH_PROVIDERS_TO_SHOW_MAP',
    SHOW_BILLING = 'SHOW_BILLING',
    SHOW_BLOG_GUIDE = 'SHOW_BLOG_GUIDE',
    SHOW_COMMUNITY = 'SHOW_COMMUNITY',
    SHOW_DOCS = 'SHOW_DOCS',
    SHOW_SIGN_UP_LINK = 'SHOW_SIGN_UP_LINK',
    SHOW_COMMUNITY_PIECES = 'SHOW_COMMUNITY_PIECES',
    SIGN_UP_ENABLED = 'SIGN_UP_ENABLED',
    TELEMETRY_ENABLED = 'TELEMETRY_ENABLED',
    TEMPLATES_PROJECT_ID = 'TEMPLATES_PROJECT_ID',
    THEME = 'THEME',
    USER_CREATED = 'USER_CREATED',
    WEBHOOK_URL_PREFIX = 'WEBHOOK_URL_PREFIX',
    SHOW_POWERED_BY_AP = 'SHOW_POWERED_BY_AP',
    PRIVACY_POLICY_URL = 'PRIVACY_POLICY_URL',
    TERMS_OF_SERVICE_URL = 'TERMS_OF_SERVICE_URL',
}
