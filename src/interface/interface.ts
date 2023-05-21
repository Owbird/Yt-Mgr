export interface Video {
  page: string;
  player_response: PlayerResponse;
  response: Response;
  html5player: string;
  formats?: FormatsEntity[] | null;
  related_videos?: RelatedVideosEntity[] | null;
  videoDetails: VideoDetails;
  full: boolean;
}
export interface PlayerResponse {
  responseContext: ResponseContext;
  playabilityStatus: PlayabilityStatus;
  streamingData: StreamingData;
  playerAds?: PlayerAdsEntity[] | null;
  playbackTracking: PlaybackTracking;
  captions: Captions;
  videoDetails: VideoDetails1;
  annotations?: AnnotationsEntity[] | null;
  playerConfig: PlayerConfig;
  storyboards: Storyboards;
  microformat: Microformat;
  cards: Cards;
  trackingParams: string;
  attestation: Attestation;
  messages?: MessagesEntity[] | null;
  endscreen: Endscreen;
  adPlacements?: AdPlacementsEntity[] | null;
  frameworkUpdates: FrameworkUpdates;
}
export interface ResponseContext {
  serviceTrackingParams?: ServiceTrackingParamsEntity[] | null;
  mainAppWebResponseContext: MainAppWebResponseContext;
  webResponseContextExtensionData: WebResponseContextExtensionData;
}
export interface ServiceTrackingParamsEntity {
  service: string;
  params?: ParamsEntity[] | null;
}
export interface ParamsEntity {
  key: string;
  value: string;
}
export interface MainAppWebResponseContext {
  loggedOut: boolean;
  trackingParam: string;
}
export interface WebResponseContextExtensionData {
  hasDecorated: boolean;
}
export interface PlayabilityStatus {
  status: string;
  playableInEmbed: boolean;
  offlineability: Offlineability;
  miniplayer: Miniplayer;
  contextParams: string;
}
export interface Offlineability {
  offlineabilityRenderer: OfflineabilityRenderer;
}
export interface OfflineabilityRenderer {
  offlineable: boolean;
  formats?: FormatsEntity1[] | null;
  clickTrackingParams: string;
}
export interface FormatsEntity1 {
  name: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  formatType: string;
}
export interface NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader {
  runs?: RunsEntity[] | null;
}
export interface RunsEntity {
  text: string;
}
export interface Miniplayer {
  miniplayerRenderer: MiniplayerRenderer;
}
export interface MiniplayerRenderer {
  playbackMode: string;
}
export interface StreamingData {
  expiresInSeconds: string;
  formats?: FormatsEntity2[] | null;
  adaptiveFormats?: AdaptiveFormatsEntity[] | null;
}
export interface FormatsEntity2 {
  itag: number;
  url: string;
  mimeType: string;
  bitrate: number;
  width: number;
  height: number;
  lastModified: string;
  quality: string;
  fps: number;
  qualityLabel: string;
  projectionType: string;
  audioQuality: string;
  approxDurationMs: string;
  audioSampleRate: string;
  audioChannels: number;
}
export interface AdaptiveFormatsEntity {
  itag: number;
  url: string;
  mimeType: string;
  bitrate: number;
  width?: number | null;
  height?: number | null;
  initRange: InitRangeOrIndexRange;
  indexRange: InitRangeOrIndexRange;
  lastModified: string;
  contentLength: string;
  quality: string;
  fps?: number | null;
  qualityLabel?: string | null;
  projectionType: string;
  averageBitrate: number;
  approxDurationMs: string;
  colorInfo?: ColorInfo | null;
  highReplication?: boolean | null;
  audioQuality?: string | null;
  audioSampleRate?: string | null;
  audioChannels?: number | null;
  loudnessDb?: number | null;
}
export interface InitRangeOrIndexRange {
  start: string;
  end: string;
}
export interface ColorInfo {
  primaries: string;
  transferCharacteristics: string;
}
export interface PlayerAdsEntity {
  playerLegacyDesktopWatchAdsRenderer: PlayerLegacyDesktopWatchAdsRenderer;
}
export interface PlayerLegacyDesktopWatchAdsRenderer {
  playerAdParams: PlayerAdParams;
  gutParams: GutParams;
  showCompanion: boolean;
  showInstream: boolean;
  useGut: boolean;
}
export interface PlayerAdParams {
  showContentThumbnail: boolean;
  enabledEngageTypes: string;
}
export interface GutParams {
  tag: string;
}
export interface PlaybackTracking {
  videostatsPlaybackUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  videostatsDelayplayUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  videostatsWatchtimeUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  ptrackingUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  qoeUrl: VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl;
  atrUrl: AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl;
  videostatsScheduledFlushWalltimeSeconds?: number[] | null;
  videostatsDefaultFlushIntervalSeconds: number;
  youtubeRemarketingUrl: AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl;
  googleRemarketingUrl: AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl;
}
export interface VideostatsPlaybackUrlOrVideostatsDelayplayUrlOrVideostatsWatchtimeUrlOrPtrackingUrlOrQoeUrl {
  baseUrl: string;
}
export interface AtrUrlOrYoutubeRemarketingUrlOrGoogleRemarketingUrl {
  baseUrl: string;
  elapsedMediaTimeSeconds: number;
}
export interface Captions {
  playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer;
}
export interface PlayerCaptionsTracklistRenderer {
  captionTracks?: CaptionTracksEntity[] | null;
  audioTracks?: AudioTracksEntity[] | null;
  translationLanguages?: TranslationLanguagesEntity[] | null;
  defaultAudioTrackIndex: number;
}
export interface CaptionTracksEntity {
  baseUrl: string;
  name: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  vssId: string;
  languageCode: string;
  kind: string;
  isTranslatable: boolean;
}
export interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText {
  simpleText: string;
}
export interface AudioTracksEntity {
  captionTrackIndices?: number[] | null;
}
export interface TranslationLanguagesEntity {
  languageCode: string;
  languageName: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
}
export interface VideoDetails1 {
  videoId: string;
  title: string;
  lengthSeconds: string;
  keywords?: string[] | null;
  channelId: string;
  isOwnerViewing: boolean;
  shortDescription: string;
  isCrawlable: boolean;
  thumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  allowRatings: boolean;
  viewCount: string;
  author: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
}
export interface ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground {
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
}
export interface ThumbnailsEntityOrRichThumbnailsEntity {
  url: string;
  width: number;
  height: number;
}
export interface AnnotationsEntity {
  playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}
export interface PlayerAnnotationsExpandedRenderer {
  featuredChannel: FeaturedChannel;
  allowSwipeDismiss: boolean;
  annotationId: string;
}
export interface FeaturedChannel {
  startTimeMs: string;
  endTimeMs: string;
  watermark: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  trackingParams: string;
  navigationEndpoint: NavigationEndpointOrEndpoint;
  channelName: string;
  subscribeButton: SubscribeButtonOrHovercardButton;
}
export interface NavigationEndpointOrEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  browseEndpoint: BrowseEndpoint;
}
export interface CommandMetadata {
  webCommandMetadata: WebCommandMetadata;
}
export interface WebCommandMetadata {
  url: string;
  webPageType: string;
  rootVe: number;
  apiUrl: string;
}
export interface BrowseEndpoint {
  browseId: string;
}
export interface SubscribeButtonOrHovercardButton {
  subscribeButtonRenderer: SubscribeButtonRenderer;
}
export interface SubscribeButtonRenderer {
  buttonText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  subscribed: boolean;
  enabled: boolean;
  type: string;
  channelId: string;
  showPreferences: boolean;
  subscribedButtonText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  unsubscribedButtonText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  trackingParams: string;
  unsubscribeButtonText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  serviceEndpoints?: ServiceEndpointsEntity[] | null;
  subscribeAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  unsubscribeAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  signInEndpoint: SignInEndpoint;
}
export interface ServiceEndpointsEntity {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata1;
  subscribeEndpoint?: SubscribeEndpointOrUnsubscribeEndpoint | null;
  signalServiceEndpoint?: SignalServiceEndpoint | null;
}
export interface CommandMetadata1 {
  webCommandMetadata: WebCommandMetadata1;
}
export interface WebCommandMetadata1 {
  sendPost: boolean;
  apiUrl?: string | null;
}
export interface SubscribeEndpointOrUnsubscribeEndpoint {
  channelIds?: string[] | null;
  params: string;
}
export interface SignalServiceEndpoint {
  signal: string;
  actions?: ActionsEntity[] | null;
}
export interface ActionsEntity {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction;
}
export interface OpenPopupAction {
  popup: Popup;
  popupType: string;
}
export interface Popup {
  confirmDialogRenderer: ConfirmDialogRenderer;
}
export interface ConfirmDialogRenderer {
  trackingParams: string;
  dialogMessages?:
    | NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader[]
    | null;
  confirmButton: ConfirmButton;
  cancelButton: CancelButton;
  primaryIsCancel: boolean;
}
export interface ConfirmButton {
  buttonRenderer: ButtonRenderer;
}
export interface ButtonRenderer {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  serviceEndpoint: ServiceEndpointOrUnsubscribeCommand;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
}
export interface ServiceEndpointOrUnsubscribeCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  unsubscribeEndpoint: SubscribeEndpointOrUnsubscribeEndpoint1;
}
export interface CommandMetadata2 {
  webCommandMetadata: WebCommandMetadata2;
}
export interface WebCommandMetadata2 {
  sendPost: boolean;
  apiUrl: string;
}
export interface SubscribeEndpointOrUnsubscribeEndpoint1 {
  channelIds?: string[] | null;
  params: string;
}
export interface AccessibilityOrAccessibilityData {
  label: string;
}
export interface CancelButton {
  buttonRenderer: ButtonRenderer1;
}
export interface ButtonRenderer1 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
}
export interface SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel {
  accessibilityData: AccessibilityOrAccessibilityData;
}
export interface SignInEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata3;
}
export interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadataOrThumbnailsEntityOrCommonConfig;
}
export interface WebCommandMetadataOrThumbnailsEntityOrCommonConfig {
  url: string;
}
export interface PlayerConfig {
  audioConfig: AudioConfig;
  streamSelectionConfig: StreamSelectionConfig;
  mediaCommonConfig: MediaCommonConfig;
  webPlayerConfig: WebPlayerConfig;
}
export interface AudioConfig {
  loudnessDb: number;
  perceptualLoudnessDb: number;
  enablePerFormatLoudness: boolean;
}
export interface StreamSelectionConfig {
  maxBitrate: string;
}
export interface MediaCommonConfig {
  dynamicReadaheadConfig: DynamicReadaheadConfig;
}
export interface DynamicReadaheadConfig {
  maxReadAheadMediaTimeMs: number;
  minReadAheadMediaTimeMs: number;
  readAheadGrowthRateMs: number;
}
export interface WebPlayerConfig {
  useCobaltTvosDash: boolean;
  webPlayerActionsPorting: WebPlayerActionsPorting;
}
export interface WebPlayerActionsPorting {
  getSharePanelCommand: GetSharePanelCommand;
  subscribeCommand: SubscribeCommand;
  unsubscribeCommand: ServiceEndpointOrUnsubscribeCommand;
  addToWatchLaterCommand: AddToWatchLaterCommandOrUntoggledServiceEndpoint;
  removeFromWatchLaterCommand: RemoveFromWatchLaterCommandOrToggledServiceEndpoint;
}
export interface GetSharePanelCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}
export interface WebPlayerShareEntityServiceEndpoint {
  serializedShareEntity: string;
}
export interface SubscribeCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  subscribeEndpoint: SubscribeEndpointOrUnsubscribeEndpoint1;
}
export interface AddToWatchLaterCommandOrUntoggledServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  playlistEditEndpoint: PlaylistEditEndpoint;
}
export interface PlaylistEditEndpoint {
  playlistId: string;
  actions?: ActionsEntity1[] | null;
}
export interface ActionsEntity1 {
  addedVideoId: string;
  action: string;
}
export interface RemoveFromWatchLaterCommandOrToggledServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  playlistEditEndpoint: PlaylistEditEndpoint1;
}
export interface PlaylistEditEndpoint1 {
  playlistId: string;
  actions?: ActionsEntity2[] | null;
}
export interface ActionsEntity2 {
  action: string;
  removedVideoId: string;
}
export interface Storyboards {
  playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}
export interface PlayerStoryboardSpecRenderer {
  spec: string;
  recommendedLevel: number;
}
export interface Microformat {
  playerMicroformatRenderer: PlayerMicroformatRenderer;
}
export interface PlayerMicroformatRenderer {
  thumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  embed: Embed;
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  description: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  lengthSeconds: string;
  ownerProfileUrl: string;
  externalChannelId: string;
  isFamilySafe: boolean;
  availableCountries?: string[] | null;
  isUnlisted: boolean;
  hasYpcMetadata: boolean;
  viewCount: string;
  category: string;
  publishDate: string;
  ownerChannelName: string;
  uploadDate: string;
}
export interface Embed {
  iframeUrl: string;
  width: number;
  height: number;
}
export interface Cards {
  cardCollectionRenderer: CardCollectionRenderer;
}
export interface CardCollectionRenderer {
  cards?: CardsEntity[] | null;
  headerText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  icon: IconOrCloseButton;
  closeButton: IconOrCloseButton;
  trackingParams: string;
  allowTeaserDismiss: boolean;
  logIconVisibilityUpdates: boolean;
}
export interface CardsEntity {
  cardRenderer: CardRenderer;
}
export interface CardRenderer {
  teaser: Teaser;
  cueRanges?: CueRangesEntity[] | null;
  trackingParams: string;
}
export interface Teaser {
  simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
}
export interface SimpleCardTeaserRenderer {
  message: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  trackingParams: string;
  prominent: boolean;
  logVisibilityUpdates: boolean;
  onTapCommand: OnTapCommandOrShowLessCommandOrCommand;
}
export interface OnTapCommandOrShowLessCommandOrCommand {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}
export interface ChangeEngagementPanelVisibilityAction {
  targetId: string;
  visibility: string;
}
export interface CueRangesEntity {
  startCardActiveMs: string;
  endCardActiveMs: string;
  teaserDurationMs: string;
  iconAfterTeaserMs: string;
}
export interface IconOrCloseButton {
  infoCardIconRenderer: InfoCardIconRendererOrMenuRenderer;
}
export interface InfoCardIconRendererOrMenuRenderer {
  trackingParams: string;
}
export interface Attestation {
  playerAttestationRenderer: PlayerAttestationRenderer;
}
export interface PlayerAttestationRenderer {
  challenge: string;
  botguardData: BotguardData;
}
export interface BotguardData {
  program: string;
  interpreterSafeUrl: InterpreterSafeUrl;
  serverEnvironment: number;
}
export interface InterpreterSafeUrl {
  privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}
export interface MessagesEntity {
  tooltipRenderer: TooltipRenderer;
}
export interface TooltipRenderer {
  promoConfig: PromoConfig;
  targetId: string;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  detailsText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  dismissButton: DismissButton;
  suggestedPosition: SuggestedPositionOrDismissStrategyOrSubscriptionButton;
  dismissStrategy: SuggestedPositionOrDismissStrategyOrSubscriptionButton;
  dwellTimeMs: string;
  trackingParams: string;
  styleType: string;
}
export interface PromoConfig {
  promoId: string;
  impressionEndpoints?:
    | ImpressionEndpointsEntityOrAcceptCommandOrDismissCommandOrCommandsEntity[]
    | null;
  acceptCommand: ImpressionEndpointsEntityOrAcceptCommandOrDismissCommandOrCommandsEntity;
  dismissCommand: ImpressionEndpointsEntityOrAcceptCommandOrDismissCommandOrCommandsEntity;
}
export interface ImpressionEndpointsEntityOrAcceptCommandOrDismissCommandOrCommandsEntity {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  feedbackEndpoint: FeedbackEndpoint;
}
export interface FeedbackEndpoint {
  feedbackToken: string;
  uiActions: UiActions;
}
export interface UiActions {
  hideEnclosingContainer: boolean;
}
export interface DismissButton {
  buttonRenderer: ButtonRenderer2;
}
export interface ButtonRenderer2 {
  size: string;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  trackingParams: string;
  command: Command;
}
export interface Command {
  clickTrackingParams: string;
  commandExecutorCommand: CommandExecutorCommand;
}
export interface CommandExecutorCommand {
  commands?:
    | ImpressionEndpointsEntityOrAcceptCommandOrDismissCommandOrCommandsEntity[]
    | null;
}
export interface SuggestedPositionOrDismissStrategyOrSubscriptionButton {
  type: string;
}
export interface Endscreen {
  endscreenRenderer: EndscreenRenderer;
}
export interface EndscreenRenderer {
  elements?: ElementsEntity[] | null;
  startMs: string;
  trackingParams: string;
}
export interface ElementsEntity {
  endscreenElementRenderer: EndscreenElementRenderer;
}
export interface EndscreenElementRenderer {
  style: string;
  image: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  icon?: IconOrChannelThumbnail | null;
  left: number;
  width: number;
  top: number;
  aspectRatio: number;
  startMs: string;
  endMs: string;
  title: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  metadata: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  callToAction?: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText1 | null;
  dismiss?: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText2 | null;
  endpoint: Endpoint;
  hovercardButton?: SubscribeButtonOrHovercardButton1 | null;
  trackingParams: string;
  isSubscribe?: boolean | null;
  id: string;
  thumbnailOverlays?: ThumbnailOverlaysEntity[] | null;
}
export interface IconOrChannelThumbnail {
  thumbnails?: WebCommandMetadataOrThumbnailsEntityOrCommonConfig[] | null;
}
export interface TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle {
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  simpleText: string;
}
export interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText1 {
  simpleText: string;
}
export interface NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText2 {
  simpleText: string;
}
export interface Endpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata4;
  browseEndpoint?: BrowseEndpoint1 | null;
  watchEndpoint?: WatchEndpoint | null;
}
export interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata3;
}
export interface WebCommandMetadata3 {
  url: string;
  webPageType: string;
  rootVe: number;
  apiUrl?: string | null;
}
export interface BrowseEndpoint1 {
  browseId: string;
}
export interface WatchEndpoint {
  videoId: string;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}
export interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}
export interface Html5PlaybackOnesieConfig {
  commonConfig: WebCommandMetadataOrThumbnailsEntityOrCommonConfig;
}
export interface SubscribeButtonOrHovercardButton1 {
  subscribeButtonRenderer: SubscribeButtonRenderer;
}
export interface ThumbnailOverlaysEntity {
  thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}
export interface ThumbnailOverlayTimeStatusRenderer {
  text: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  style: string;
}
export interface AdPlacementsEntity {
  adPlacementRenderer: AdPlacementRenderer;
}
export interface AdPlacementRenderer {
  config: Config;
  renderer: Renderer;
  adSlotLoggingData: AdSlotLoggingData;
}
export interface Config {
  adPlacementConfig: AdPlacementConfig;
}
export interface AdPlacementConfig {
  kind: string;
  adTimeOffset: AdTimeOffset;
  hideCueRangeMarker: boolean;
}
export interface AdTimeOffset {
  offsetStartMilliseconds: string;
  offsetEndMilliseconds: string;
}
export interface Renderer {
  adBreakServiceRenderer?: AdBreakServiceRenderer | null;
  clientForecastingAdRenderer?: ClientForecastingAdRendererOrMedia | null;
}
export interface AdBreakServiceRenderer {
  prefetchMilliseconds: string;
  getAdBreakUrl: string;
}
export interface ClientForecastingAdRendererOrMedia {}
export interface AdSlotLoggingData {
  serializedSlotAdServingDataEntry: string;
}
export interface FrameworkUpdates {
  entityBatchUpdate: EntityBatchUpdate;
}
export interface EntityBatchUpdate {
  mutations?: MutationsEntity[] | null;
  timestamp: Timestamp;
}
export interface MutationsEntity {
  entityKey: string;
  type: string;
  payload: Payload;
}
export interface Payload {
  offlineabilityEntity: OfflineabilityEntity;
}
export interface OfflineabilityEntity {
  key: string;
  offlineabilityRenderer: string;
  addToOfflineButtonState: string;
  contentCheckOk: boolean;
  racyCheckOk: boolean;
  loggingDirectives: LoggingDirectives;
}
export interface LoggingDirectives {
  trackingParams: string;
  visibility: Visibility;
  enableDisplayloggerExperiment: boolean;
}
export interface Visibility {
  types: string;
}
export interface Timestamp {
  seconds: string;
  nanos: number;
}
export interface Response {
  responseContext: ResponseContext1;
  contents: Contents;
  currentVideoEndpoint: EndpointOrNextEndpointOrNavigationEndpointOrCurrentVideoEndpoint;
  trackingParams: string;
  playerOverlays: PlayerOverlays;
  overlay: Overlay;
  onResponseReceivedEndpoints?: OnResponseReceivedEndpointsEntity[] | null;
  engagementPanels?: EngagementPanelsEntity[] | null;
  topbar: Topbar;
  pageVisualEffects?: PageVisualEffectsEntity[] | null;
  frameworkUpdates: FrameworkUpdates1;
}
export interface ResponseContext1 {
  serviceTrackingParams?: ServiceTrackingParamsEntity[] | null;
  mainAppWebResponseContext: MainAppWebResponseContext;
  webResponseContextExtensionData: WebResponseContextExtensionData1;
}
export interface WebResponseContextExtensionData1 {
  ytConfigData: YtConfigData;
  webPrefetchData: WebPrefetchData;
  hasDecorated: boolean;
}
export interface YtConfigData {
  visitorData: string;
  rootVisualElementType: number;
}
export interface WebPrefetchData {
  navigationEndpoints?: NavigationEndpointsEntityOrAutoplayVideo[] | null;
}
export interface NavigationEndpointsEntityOrAutoplayVideo {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  watchEndpoint: WatchEndpoint1;
}
export interface CommandMetadata5 {
  webCommandMetadata: WebCommandMetadata4;
}
export interface WebCommandMetadata4 {
  url: string;
  webPageType: string;
  rootVe: number;
}
export interface WatchEndpoint1 {
  videoId: string;
  params: string;
  playerParams: string;
  watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig;
}
export interface WatchEndpointSupportedPrefetchConfig {
  prefetchHintConfig: PrefetchHintConfig;
}
export interface PrefetchHintConfig {
  prefetchPriority: number;
  countdownUiRelativeSecondsPrefetchCondition: number;
}
export interface Contents {
  twoColumnWatchNextResults: TwoColumnWatchNextResults;
}
export interface TwoColumnWatchNextResults {
  results: Results;
  secondaryResults: SecondaryResults;
  autoplay: Autoplay;
}
export interface Results {
  results: Results1;
}
export interface Results1 {
  contents?: ContentsEntity[] | null;
  trackingParams: string;
}
export interface ContentsEntity {
  videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer | null;
  videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer | null;
  itemSectionRenderer?: ItemSectionRenderer | null;
}
export interface VideoPrimaryInfoRenderer {
  title: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  viewCount: ViewCount;
  videoActions: VideoActions;
  trackingParams: string;
  superTitleLink: SuperTitleLink;
  dateText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  relativeDateText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
}
export interface ViewCount {
  videoViewCountRenderer: VideoViewCountRenderer;
}
export interface VideoViewCountRenderer {
  viewCount: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  shortViewCount: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
}
export interface VideoActions {
  menuRenderer: MenuRenderer;
}
export interface MenuRenderer {
  items?: ItemsEntity[] | null;
  trackingParams: string;
  topLevelButtons?: TopLevelButtonsEntity[] | null;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  flexibleItems?: FlexibleItemsEntity[] | null;
}
export interface ItemsEntity {
  menuNavigationItemRenderer?: MenuNavigationItemRenderer | null;
  menuServiceItemRenderer?: MenuServiceItemRenderer | null;
}
export interface MenuNavigationItemRenderer {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  navigationEndpoint: NavigationEndpoint;
  trackingParams: string;
}
export interface IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage {
  iconType: string;
}
export interface NavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata6;
  modalEndpoint: ModalEndpoint;
}
export interface CommandMetadata6 {
  webCommandMetadata: WebCommandMetadata5;
}
export interface WebCommandMetadata5 {
  ignoreNavigation: boolean;
}
export interface ModalEndpoint {
  modal: Modal;
}
export interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}
export interface ModalWithTitleAndButtonRenderer {
  title: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  content: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  button: Button;
}
export interface Button {
  buttonRenderer: ButtonRenderer3;
}
export interface ButtonRenderer3 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  navigationEndpoint: NavigationEndpoint1;
  trackingParams: string;
}
export interface NavigationEndpoint1 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signInEndpoint: SignInEndpointOrWatchOrAdsEngagementPanelContentRenderer;
}
export interface SignInEndpointOrWatchOrAdsEngagementPanelContentRenderer {
  hack: boolean;
}
export interface MenuServiceItemRenderer {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  serviceEndpoint: ServiceEndpoint;
  trackingParams: string;
}
export interface ServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata7;
  signalServiceEndpoint: SignalServiceEndpoint1;
}
export interface CommandMetadata7 {
  webCommandMetadata: WebCommandMetadata6;
}
export interface WebCommandMetadata6 {
  sendPost: boolean;
}
export interface SignalServiceEndpoint1 {
  signal: string;
  actions?: ActionsEntity3[] | null;
}
export interface ActionsEntity3 {
  clickTrackingParams: string;
  showEngagementPanelEndpoint: ShowEngagementPanelEndpoint;
}
export interface ShowEngagementPanelEndpoint {
  panelIdentifier: string;
}
export interface TopLevelButtonsEntity {
  segmentedLikeDislikeButtonRenderer?: SegmentedLikeDislikeButtonRenderer | null;
  buttonRenderer?: ButtonRenderer4 | null;
}
export interface SegmentedLikeDislikeButtonRenderer {
  likeButton: LikeButton;
  dislikeButton: DislikeButton;
}
export interface LikeButton {
  toggleButtonRenderer: ToggleButtonRenderer;
}
export interface ToggleButtonRenderer {
  style: StyleOrToggledStyle;
  isToggled: boolean;
  isDisabled: boolean;
  defaultIcon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  defaultText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  toggledText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
  defaultTooltip: string;
  toggledTooltip: string;
  toggledStyle: StyleOrToggledStyle;
  defaultNavigationEndpoint: DefaultNavigationEndpoint;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  toggleButtonSupportedData: ToggleButtonSupportedData;
  targetId: string;
}
export interface StyleOrToggledStyle {
  styleType: string;
}
export interface DefaultNavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata6;
  modalEndpoint: ModalEndpoint1;
}
export interface ModalEndpoint1 {
  modal: Modal1;
}
export interface Modal1 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer1;
}
export interface ModalWithTitleAndButtonRenderer1 {
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  content: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  button: Button1;
}
export interface Button1 {
  buttonRenderer: ButtonRenderer5;
}
export interface ButtonRenderer5 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  navigationEndpoint: NavigationEndpoint2;
  trackingParams: string;
}
export interface NavigationEndpoint2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signInEndpoint: SignInEndpoint1;
}
export interface SignInEndpoint1 {
  nextEndpoint: EndpointOrNextEndpointOrNavigationEndpointOrCurrentVideoEndpoint;
  idamTag: string;
}
export interface EndpointOrNextEndpointOrNavigationEndpointOrCurrentVideoEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  watchEndpoint: WatchEndpoint2;
}
export interface WatchEndpoint2 {
  videoId: string;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}
export interface ToggleButtonSupportedData {
  toggleButtonIdData: ToggleButtonIdData;
}
export interface ToggleButtonIdData {
  id: string;
}
export interface DislikeButton {
  toggleButtonRenderer: ToggleButtonRenderer1;
}
export interface ToggleButtonRenderer1 {
  style: StyleOrToggledStyle;
  isToggled: boolean;
  isDisabled: boolean;
  defaultIcon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
  defaultTooltip: string;
  toggledTooltip: string;
  toggledStyle: StyleOrToggledStyle;
  defaultNavigationEndpoint: DefaultNavigationEndpoint;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  toggleButtonSupportedData: ToggleButtonSupportedData;
  targetId: string;
}
export interface ButtonRenderer4 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  serviceEndpoint: ServiceEndpointOrNavigationEndpoint;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  tooltip: string;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
}
export interface ServiceEndpointOrNavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}
export interface ShareEntityServiceEndpoint {
  serializedShareEntity: string;
  commands?: CommandsEntity[] | null;
}
export interface CommandsEntity {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction1;
}
export interface OpenPopupAction1 {
  popup: Popup1;
  popupType: string;
  beReused: boolean;
}
export interface Popup1 {
  unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}
export interface UnifiedSharePanelRenderer {
  trackingParams: string;
  showLoadingSpinner: boolean;
}
export interface FlexibleItemsEntity {
  menuFlexibleItemRenderer: MenuFlexibleItemRenderer;
}
export interface MenuFlexibleItemRenderer {
  menuItem: MenuItem;
  topLevelButton: TopLevelButton;
}
export interface MenuItem {
  menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer | null;
  menuServiceItemRenderer?: MenuServiceItemRenderer1 | null;
}
export interface MenuServiceItemDownloadRenderer {
  serviceEndpoint: ServiceEndpointOrCommand;
  trackingParams: string;
}
export interface ServiceEndpointOrCommand {
  clickTrackingParams: string;
  offlineVideoEndpoint: OfflineVideoEndpoint;
}
export interface OfflineVideoEndpoint {
  videoId: string;
  onAddCommand: OnAddCommand;
}
export interface OnAddCommand {
  clickTrackingParams: string;
  getDownloadActionCommand: GetDownloadActionCommand;
}
export interface GetDownloadActionCommand {
  videoId: string;
  params: string;
  offlineabilityEntityKey: string;
}
export interface MenuServiceItemRenderer1 {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  serviceEndpoint: ServiceEndpointOrCommand1;
  trackingParams: string;
}
export interface ServiceEndpointOrCommand1 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata6;
  modalEndpoint: ModalEndpoint2;
}
export interface ModalEndpoint2 {
  modal: Modal2;
}
export interface Modal2 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2;
}
export interface ModalWithTitleAndButtonRenderer2 {
  title: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  content: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  button: Button1;
}
export interface TopLevelButton {
  downloadButtonRenderer?: DownloadButtonRenderer | null;
  buttonRenderer?: ButtonRenderer6 | null;
}
export interface DownloadButtonRenderer {
  trackingParams: string;
  style: string;
  size: string;
  targetId: string;
  command: ServiceEndpointOrCommand;
}
export interface ButtonRenderer6 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  accessibility: AccessibilityOrAccessibilityData;
  tooltip: string;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  command: ServiceEndpointOrCommand1;
}
export interface SuperTitleLink {
  runs?: RunsEntity1[] | null;
}
export interface RunsEntity1 {
  text: string;
  navigationEndpoint: NavigationEndpointOrEndpoint;
  loggingDirectives: LoggingDirectives;
}
export interface VideoSecondaryInfoRenderer {
  owner: Owner;
  subscribeButton: SubscribeButton;
  metadataRowContainer: MetadataRowContainer;
  showMoreText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  showLessText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  trackingParams: string;
  defaultExpanded: boolean;
  descriptionCollapsedLines: number;
  showMoreCommand: ShowMoreCommandOrOnTap;
  showLessCommand: OnTapCommandOrShowLessCommandOrCommand;
  attributedDescription: AttributedDescriptionOrAttributedDescriptionBodyText;
}
export interface Owner {
  videoOwnerRenderer: VideoOwnerRenderer;
}
export interface VideoOwnerRenderer {
  thumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  title: TitleOrLongBylineTextOrShortBylineTextOrByline;
  subscriptionButton: SuggestedPositionOrDismissStrategyOrSubscriptionButton;
  navigationEndpoint: NavigationEndpointOrChannelNavigationEndpoint;
  subscriberCountText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  trackingParams: string;
}
export interface TitleOrLongBylineTextOrShortBylineTextOrByline {
  runs?: RunsEntity2[] | null;
}
export interface RunsEntity2 {
  text: string;
  navigationEndpoint: NavigationEndpointOrChannelNavigationEndpoint;
}
export interface NavigationEndpointOrChannelNavigationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  browseEndpoint: BrowseEndpoint2;
}
export interface BrowseEndpoint2 {
  browseId: string;
  canonicalBaseUrl: string;
}
export interface SubscribeButton {
  buttonRenderer: ButtonRenderer7;
}
export interface ButtonRenderer7 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  navigationEndpoint: NavigationEndpoint3;
  trackingParams: string;
  targetId: string;
}
export interface NavigationEndpoint3 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata6;
  modalEndpoint: ModalEndpoint3;
}
export interface ModalEndpoint3 {
  modal: Modal3;
}
export interface Modal3 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer3;
}
export interface ModalWithTitleAndButtonRenderer3 {
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  content: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  button: Button2;
}
export interface Button2 {
  buttonRenderer: ButtonRenderer8;
}
export interface ButtonRenderer8 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  navigationEndpoint: NavigationEndpoint4;
  trackingParams: string;
}
export interface NavigationEndpoint4 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signInEndpoint: SignInEndpoint2;
}
export interface SignInEndpoint2 {
  nextEndpoint: EndpointOrNextEndpointOrNavigationEndpointOrCurrentVideoEndpoint;
  continueAction: string;
  idamTag: string;
}
export interface MetadataRowContainer {
  metadataRowContainerRenderer: MetadataRowContainerRenderer;
}
export interface MetadataRowContainerRenderer {
  collapsedItemCount: number;
  trackingParams: string;
}
export interface ShowMoreCommandOrOnTap {
  clickTrackingParams: string;
  commandExecutorCommand: CommandExecutorCommand1;
}
export interface CommandExecutorCommand1 {
  commands?: CommandsEntity1[] | null;
}
export interface CommandsEntity1 {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction1 | null;
  scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommandOrShowReloadUiCommand | null;
}
export interface ChangeEngagementPanelVisibilityAction1 {
  targetId: string;
  visibility: string;
}
export interface ScrollToEngagementPanelCommandOrShowReloadUiCommand {
  targetId: string;
}
export interface AttributedDescriptionOrAttributedDescriptionBodyText {
  content: string;
  commandRuns?: CommandRunsEntity[] | null;
  styleRuns?: StyleRunsEntity[] | null;
}
export interface CommandRunsEntity {
  startIndex: number;
  length: number;
  onTap: OnTap;
  loggingDirectives: LoggingDirectives1;
}
export interface OnTap {
  innertubeCommand: InnertubeCommand;
}
export interface InnertubeCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata;
  browseEndpoint: BrowseEndpoint3;
}
export interface BrowseEndpoint3 {
  browseId: string;
  params: string;
}
export interface LoggingDirectives1 {
  trackingParams: string;
  enableDisplayloggerExperiment: boolean;
}
export interface StyleRunsEntity {
  startIndex: number;
  length: number;
  fontColor: number;
}
export interface ItemSectionRenderer {
  contents?: ContentsEntity1[] | null;
  trackingParams: string;
  sectionIdentifier: string;
  targetId?: string | null;
}
export interface ContentsEntity1 {
  commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer | null;
  continuationItemRenderer?: ContinuationItemRenderer | null;
}
export interface CommentsEntryPointHeaderRenderer {
  headerText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  onTap: ShowMoreCommandOrOnTap;
  trackingParams: string;
  commentCount: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  contentRenderer: ContentRenderer;
  targetId: string;
}
export interface ContentRenderer {
  commentsEntryPointTeaserRenderer: CommentsEntryPointTeaserRenderer;
}
export interface CommentsEntryPointTeaserRenderer {
  teaserAvatar: TeaserAvatar;
  teaserContent: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  trackingParams: string;
}
export interface TeaserAvatar {
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
}
export interface ContinuationItemRenderer {
  trigger: string;
  continuationEndpoint: ContinuationEndpointOrCommand;
}
export interface ContinuationEndpointOrCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  continuationCommand: ContinuationCommand;
}
export interface ContinuationCommand {
  token: string;
  request: string;
}
export interface SecondaryResults {
  secondaryResults: SecondaryResults1;
}
export interface SecondaryResults1 {
  results?: ResultsEntity[] | null;
  trackingParams: string;
  targetId: string;
}
export interface ResultsEntity {
  compactVideoRenderer?: CompactVideoRenderer | null;
  continuationItemRenderer?: ContinuationItemRenderer1 | null;
}
export interface CompactVideoRenderer {
  videoId: string;
  thumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  title: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  longBylineText: TitleOrLongBylineTextOrShortBylineTextOrByline;
  publishedTimeText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  viewCountText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  lengthText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  navigationEndpoint: NavigationEndpoint5;
  shortBylineText: TitleOrLongBylineTextOrShortBylineTextOrByline;
  channelThumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  ownerBadges?: OwnerBadgesEntity[] | null;
  trackingParams: string;
  shortViewCountText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  menu: Menu;
  thumbnailOverlays?: ThumbnailOverlaysEntity1[] | null;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  richThumbnail: RichThumbnail;
}
export interface NavigationEndpoint5 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  watchEndpoint: WatchEndpoint3;
}
export interface WatchEndpoint3 {
  videoId: string;
  nofollow: boolean;
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}
export interface OwnerBadgesEntity {
  metadataBadgeRenderer: MetadataBadgeRenderer;
}
export interface MetadataBadgeRenderer {
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  style: string;
  tooltip: string;
  trackingParams: string;
  accessibilityData: AccessibilityOrAccessibilityData;
}
export interface Menu {
  menuRenderer: MenuRenderer1;
}
export interface MenuRenderer1 {
  items?: ItemsEntity1[] | null;
  trackingParams: string;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  targetId?: string | null;
}
export interface ItemsEntity1 {
  menuServiceItemRenderer?: MenuServiceItemRenderer2 | null;
  menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer1 | null;
}
export interface MenuServiceItemRenderer2 {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  serviceEndpoint: ServiceEndpoint1;
  trackingParams: string;
  hasSeparator?: boolean | null;
}
export interface ServiceEndpoint1 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata1;
  signalServiceEndpoint?: SignalServiceEndpoint2 | null;
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint1 | null;
}
export interface SignalServiceEndpoint2 {
  signal: string;
  actions?: ActionsEntity4[] | null;
}
export interface ActionsEntity4 {
  clickTrackingParams: string;
  addToPlaylistCommand?: AddToPlaylistCommand | null;
  openPopupAction?: OpenPopupAction2 | null;
}
export interface AddToPlaylistCommand {
  openMiniplayer: boolean;
  openListPanel: boolean;
  videoId: string;
  listType: string;
  onCreateListCommand: OnCreateListCommand;
  videoIds?: string[] | null;
}
export interface OnCreateListCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;
}
export interface CreatePlaylistServiceEndpoint {
  videoIds?: string[] | null;
  params: string;
}
export interface OpenPopupAction2 {
  popup: Popup2;
  popupType: string;
}
export interface Popup2 {
  notificationActionRenderer: NotificationActionRenderer;
}
export interface NotificationActionRenderer {
  responseText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  trackingParams: string;
}
export interface ShareEntityServiceEndpoint1 {
  serializedShareEntity: string;
  commands?: CommandsEntity[] | null;
}
export interface MenuServiceItemDownloadRenderer1 {
  serviceEndpoint: ServiceEndpoint2;
  trackingParams: string;
}
export interface ServiceEndpoint2 {
  clickTrackingParams: string;
  offlineVideoEndpoint: OfflineVideoEndpoint1;
}
export interface OfflineVideoEndpoint1 {
  videoId: string;
  onAddCommand: OnAddCommand1;
}
export interface OnAddCommand1 {
  clickTrackingParams: string;
  getDownloadActionCommand: GetDownloadActionCommand1;
}
export interface GetDownloadActionCommand1 {
  videoId: string;
  params: string;
}
export interface ThumbnailOverlaysEntity1 {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer1 | null;
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer | null;
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer | null;
}
export interface ThumbnailOverlayTimeStatusRenderer1 {
  text: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  style: string;
}
export interface ThumbnailOverlayToggleButtonRenderer {
  isToggled?: boolean | null;
  untoggledIcon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  toggledIcon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  untoggledTooltip: string;
  toggledTooltip: string;
  untoggledServiceEndpoint: UntoggledServiceEndpoint;
  toggledServiceEndpoint?: RemoveFromWatchLaterCommandOrToggledServiceEndpoint1 | null;
  untoggledAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  toggledAccessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  trackingParams: string;
}
export interface UntoggledServiceEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata1;
  playlistEditEndpoint?: PlaylistEditEndpoint2 | null;
  signalServiceEndpoint?: SignalServiceEndpoint3 | null;
}
export interface PlaylistEditEndpoint2 {
  playlistId: string;
  actions?: ActionsEntity1[] | null;
}
export interface SignalServiceEndpoint3 {
  signal: string;
  actions?: ActionsEntity5[] | null;
}
export interface ActionsEntity5 {
  clickTrackingParams: string;
  addToPlaylistCommand: AddToPlaylistCommand1;
}
export interface AddToPlaylistCommand1 {
  openMiniplayer: boolean;
  openListPanel: boolean;
  videoId: string;
  listType: string;
  onCreateListCommand: OnCreateListCommand;
  videoIds?: string[] | null;
}
export interface RemoveFromWatchLaterCommandOrToggledServiceEndpoint1 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  playlistEditEndpoint: PlaylistEditEndpoint1;
}
export interface ThumbnailOverlayNowPlayingRenderer {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
}
export interface RichThumbnail {
  movingThumbnailRenderer: MovingThumbnailRenderer;
}
export interface MovingThumbnailRenderer {
  movingThumbnailDetails?: MovingThumbnailDetails | null;
  enableHoveredLogging: boolean;
  enableOverlay: boolean;
}
export interface MovingThumbnailDetails {
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
  logAsMovingThumbnail: boolean;
}
export interface ContinuationItemRenderer1 {
  trigger: string;
  continuationEndpoint: ContinuationEndpointOrCommand;
  button: Button3;
}
export interface Button3 {
  buttonRenderer: ButtonRenderer9;
}
export interface ButtonRenderer9 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  trackingParams: string;
  command: ContinuationEndpointOrCommand;
}
export interface Autoplay {
  autoplay: Autoplay1;
}
export interface Autoplay1 {
  sets?: SetsEntity[] | null;
  countDownSecs: number;
  trackingParams: string;
}
export interface SetsEntity {
  mode: string;
  autoplayVideo: NavigationEndpointsEntityOrAutoplayVideo;
}
export interface PlayerOverlays {
  playerOverlayRenderer: PlayerOverlayRenderer;
}
export interface PlayerOverlayRenderer {
  endScreen: EndScreen;
  autoplay: Autoplay2;
  shareButton: ShareButton;
  addToMenu: AddToMenu;
  videoDetails: VideoDetails2;
  autonavToggle: AutonavToggle;
  decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer;
}
export interface EndScreen {
  watchNextEndScreenRenderer: WatchNextEndScreenRenderer;
}
export interface WatchNextEndScreenRenderer {
  results?: ResultsEntity1[] | null;
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  trackingParams: string;
}
export interface ResultsEntity1 {
  endScreenVideoRenderer: EndScreenVideoRenderer;
}
export interface EndScreenVideoRenderer {
  videoId: string;
  thumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  title: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  shortBylineText: TitleOrLongBylineTextOrShortBylineTextOrByline;
  lengthText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  lengthInSeconds: number;
  navigationEndpoint: EndpointOrNextEndpointOrNavigationEndpointOrCurrentVideoEndpoint;
  trackingParams: string;
  shortViewCountText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  publishedTimeText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  thumbnailOverlays?: ThumbnailOverlaysEntity2[] | null;
}
export interface ThumbnailOverlaysEntity2 {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2 | null;
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer1 | null;
}
export interface ThumbnailOverlayTimeStatusRenderer2 {
  text: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  style: string;
}
export interface ThumbnailOverlayNowPlayingRenderer1 {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
}
export interface Autoplay2 {
  playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer;
}
export interface PlayerOverlayAutoplayRenderer {
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  videoTitle: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  byline: TitleOrLongBylineTextOrShortBylineTextOrByline;
  pauseText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  background: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  countDownSecs: number;
  cancelButton: CancelButton1;
  nextButton: NextButton;
  trackingParams: string;
  closeButton: CloseButton;
  thumbnailOverlays?: ThumbnailOverlaysEntity[] | null;
  preferImmediateRedirect: boolean;
  videoId: string;
  publishedTimeText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  webShowNewAutonavCountdown: boolean;
  webShowBigThumbnailEndscreen: boolean;
  shortViewCountText: TitleOrTextOrDefaultTextOrToggledTextOrRelativeDateTextOrSubscriberCountTextOrLengthTextOrShortViewCountTextOrVideoTitle;
  countDownSecsForFullscreen: number;
}
export interface CancelButton1 {
  buttonRenderer: ButtonRenderer10;
}
export interface ButtonRenderer10 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  command: Command1;
}
export interface Command1 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  getSurveyCommand: GetSurveyCommand;
}
export interface GetSurveyCommand {
  endpoint: Endpoint1;
  action: string;
}
export interface Endpoint1 {
  watch: SignInEndpointOrWatchOrAdsEngagementPanelContentRenderer;
}
export interface NextButton {
  buttonRenderer: ButtonRenderer11;
}
export interface ButtonRenderer11 {
  style: string;
  size: string;
  isDisabled: boolean;
  navigationEndpoint: EndpointOrNextEndpointOrNavigationEndpointOrCurrentVideoEndpoint;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
}
export interface CloseButton {
  buttonRenderer: ButtonRenderer12;
}
export interface ButtonRenderer12 {
  style: string;
  size: string;
  isDisabled: boolean;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  accessibility: AccessibilityOrAccessibilityData;
  trackingParams: string;
}
export interface ShareButton {
  buttonRenderer: ButtonRenderer13;
}
export interface ButtonRenderer13 {
  style: string;
  size: string;
  isDisabled: boolean;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  navigationEndpoint: ServiceEndpointOrNavigationEndpoint;
  tooltip: string;
  trackingParams: string;
}
export interface AddToMenu {
  menuRenderer: InfoCardIconRendererOrMenuRenderer;
}
export interface VideoDetails2 {
  playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}
export interface PlayerOverlayVideoDetailsRenderer {
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  subtitle: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
}
export interface AutonavToggle {
  autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer;
}
export interface AutoplaySwitchButtonRenderer {
  onEnabledCommand: OnEnabledCommandOrOnDisabledCommand;
  onDisabledCommand: OnEnabledCommandOrOnDisabledCommand;
  enabledAccessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  disabledAccessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  trackingParams: string;
  enabled: boolean;
}
export interface OnEnabledCommandOrOnDisabledCommand {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  setSettingEndpoint: SetSettingEndpoint;
}
export interface SetSettingEndpoint {
  settingItemId: string;
  boolValue: boolean;
  settingItemIdForClient: string;
}
export interface DecoratedPlayerBarRenderer {
  decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer1;
}
export interface DecoratedPlayerBarRenderer1 {
  playerBar: PlayerBar;
}
export interface PlayerBar {
  multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer;
}
export interface MultiMarkersPlayerBarRenderer {
  visibleOnLoad: VisibleOnLoad;
  markersMap?: MarkersMapEntity[] | null;
}
export interface VisibleOnLoad {
  key: string;
}
export interface MarkersMapEntity {
  key: string;
  value: Value;
}
export interface Value {
  trackingParams: string;
  heatmap: Heatmap;
}
export interface Heatmap {
  heatmapRenderer: HeatmapRenderer;
}
export interface HeatmapRenderer {
  maxHeightDp: number;
  minHeightDp: number;
  showHideAnimationDurationMillis: number;
  heatMarkers?: HeatMarkersEntity[] | null;
  heatMarkersDecorations?: HeatMarkersDecorationsEntity[] | null;
}
export interface HeatMarkersEntity {
  heatMarkerRenderer: HeatMarkerRenderer;
}
export interface HeatMarkerRenderer {
  timeRangeStartMillis: number;
  markerDurationMillis: number;
  heatMarkerIntensityScoreNormalized: number;
}
export interface HeatMarkersDecorationsEntity {
  timedMarkerDecorationRenderer: TimedMarkerDecorationRenderer;
}
export interface TimedMarkerDecorationRenderer {
  visibleTimeRangeStartMillis: number;
  visibleTimeRangeEndMillis: number;
  decorationTimeMillis: number;
  label: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: string;
  trackingParams: string;
}
export interface Overlay {
  tooltipRenderer: TooltipRenderer1;
}
export interface TooltipRenderer1 {
  promoConfig: PromoConfig;
  targetId: string;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  detailsText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  dismissButton: DismissButton1;
  suggestedPosition: SuggestedPositionOrDismissStrategyOrSubscriptionButton;
  dismissStrategy: SuggestedPositionOrDismissStrategyOrSubscriptionButton;
  dwellTimeMs: string;
  trackingParams: string;
  styleType: string;
}
export interface DismissButton1 {
  buttonRenderer: ButtonRenderer14;
}
export interface ButtonRenderer14 {
  style: string;
  size: string;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  trackingParams: string;
  command: Command;
}
export interface OnResponseReceivedEndpointsEntity {
  clickTrackingParams: string;
  commandMetadata?: CommandMetadata8 | null;
  signalServiceEndpoint?: SignalServiceEndpoint4 | null;
  changeKeyedMarkersVisibilityCommand?: ChangeKeyedMarkersVisibilityCommand | null;
  loadMarkersCommand?: LoadMarkersCommand | null;
}
export interface CommandMetadata8 {
  webCommandMetadata: WebCommandMetadata6;
}
export interface SignalServiceEndpoint4 {
  signal: string;
  actions?: ActionsEntity6[] | null;
}
export interface ActionsEntity6 {
  clickTrackingParams: string;
  signalAction: SignalAction;
}
export interface SignalAction {
  signal: string;
}
export interface ChangeKeyedMarkersVisibilityCommand {
  isVisible: boolean;
  key: string;
}
export interface LoadMarkersCommand {
  entityKeys?: string[] | null;
}
export interface EngagementPanelsEntity {
  engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}
export interface EngagementPanelSectionListRenderer {
  content: Content;
  targetId: string;
  visibility: string;
  loggingDirectives: LoggingDirectives;
  panelIdentifier?: string | null;
  header?: Header | null;
  veType?: number | null;
  onShowCommands?: OnShowCommandsEntity[] | null;
}
export interface Content {
  adsEngagementPanelContentRenderer?: SignInEndpointOrWatchOrAdsEngagementPanelContentRenderer1 | null;
  structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer | null;
  sectionListRenderer?: SectionListRenderer | null;
  continuationItemRenderer?: ContinuationItemRenderer2 | null;
}
export interface SignInEndpointOrWatchOrAdsEngagementPanelContentRenderer1 {
  hack: boolean;
}
export interface StructuredDescriptionContentRenderer {
  items?: ItemsEntity2[] | null;
}
export interface ItemsEntity2 {
  videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer | null;
  expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer | null;
  videoDescriptionCourseSectionRenderer?: VideoDescriptionCourseSectionRenderer | null;
}
export interface VideoDescriptionHeaderRenderer {
  title: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  channel: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  views: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  publishDate: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  factoid?: FactoidEntity[] | null;
  channelNavigationEndpoint: NavigationEndpointOrChannelNavigationEndpoint;
  channelThumbnail: IconOrChannelThumbnail1;
}
export interface FactoidEntity {
  factoidRenderer: FactoidRenderer;
}
export interface FactoidRenderer {
  value: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  label: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  accessibilityText: string;
}
export interface IconOrChannelThumbnail1 {
  thumbnails?: WebCommandMetadataOrThumbnailsEntityOrCommonConfig[] | null;
}
export interface ExpandableVideoDescriptionBodyRenderer {
  showMoreText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  showLessText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  attributedDescriptionBodyText: AttributedDescriptionOrAttributedDescriptionBodyText;
}
export interface VideoDescriptionCourseSectionRenderer {
  sectionTitle: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  mediaLockups?: MediaLockupsEntity[] | null;
}
export interface MediaLockupsEntity {
  structuredDescriptionPlaylistLockupRenderer: StructuredDescriptionPlaylistLockupRenderer;
}
export interface StructuredDescriptionPlaylistLockupRenderer {
  thumbnail: ThumbnailOrWatermarkOrImageOrChannelThumbnailOrBackground;
  title: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  shortBylineText: NameOrLanguageNameOrTitleOrDescriptionOrMessageOrHeaderTextOrMetadataOrCallToActionOrDismissOrViewCountOrShortViewCountOrTextOrContentOrDateTextOrShowMoreTextOrShowLessTextOrTeaserContentOrCommentCountOrResponseTextOrPublishedTimeTextOrViewCountTextOrPauseTextOrValueOrLabelOrChannelOrViewsOrPublishDateOrShortBylineText;
  videoCountShortText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  navigationEndpoint: NavigationEndpointOrEndpoint;
  trackingParams: string;
  thumbnailWidth: number;
  aspectRatio: number;
  maxLinesTitle: number;
  maxLinesShortBylineText: number;
  overlayPosition: string;
}
export interface SectionListRenderer {
  contents?: ContentsEntity2[] | null;
  trackingParams: string;
}
export interface ContentsEntity2 {
  itemSectionRenderer: ItemSectionRenderer1;
}
export interface ItemSectionRenderer1 {
  contents?: ContentsEntity3[] | null;
  trackingParams: string;
  sectionIdentifier: string;
  targetId: string;
}
export interface ContentsEntity3 {
  continuationItemRenderer: ContinuationItemRenderer3;
}
export interface ContinuationItemRenderer3 {
  trigger: string;
  continuationEndpoint: ContinuationEndpointOrCommand;
}
export interface ContinuationItemRenderer2 {
  trigger: string;
  continuationEndpoint: ContinuationEndpoint;
}
export interface ContinuationEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  getTranscriptEndpoint: GetTranscriptEndpoint;
}
export interface GetTranscriptEndpoint {
  params: string;
}
export interface Header {
  engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}
export interface EngagementPanelTitleHeaderRenderer {
  title: Title;
  visibilityButton: VisibilityButton;
  trackingParams: string;
  contextualInfo?: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader1 | null;
  menu?: Menu1 | null;
}
export interface Title {
  simpleText?: string | null;
  runs?: RunsEntity[] | null;
}
export interface VisibilityButton {
  buttonRenderer: ButtonRenderer15;
}
export interface ButtonRenderer15 {
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  command: Command2;
  style?: string | null;
  size?: string | null;
  accessibility?: AccessibilityOrAccessibilityData1 | null;
}
export interface Command2 {
  clickTrackingParams: string;
  commandExecutorCommand?: CommandExecutorCommand2 | null;
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2 | null;
}
export interface CommandExecutorCommand2 {
  commands?: CommandsEntity2[] | null;
}
export interface CommandsEntity2 {
  clickTrackingParams: string;
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction3 | null;
  updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand | null;
}
export interface ChangeEngagementPanelVisibilityAction3 {
  targetId: string;
  visibility: string;
}
export interface UpdateToggleButtonStateCommand {
  toggled: boolean;
  buttonId: string;
}
export interface ChangeEngagementPanelVisibilityAction2 {
  targetId: string;
  visibility: string;
}
export interface AccessibilityOrAccessibilityData1 {
  label: string;
}
export interface NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader1 {
  runs?: RunsEntity[] | null;
}
export interface Menu1 {
  sortFilterSubMenuRenderer?: SortFilterSubMenuRenderer | null;
  menuRenderer?: MenuRenderer2 | null;
}
export interface SortFilterSubMenuRenderer {
  subMenuItems?: SubMenuItemsEntity[] | null;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  trackingParams: string;
}
export interface SubMenuItemsEntity {
  title: string;
  selected: boolean;
  serviceEndpoint: ServiceEndpoint3;
  trackingParams: string;
}
export interface ServiceEndpoint3 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  continuationCommand: ContinuationCommand1;
}
export interface ContinuationCommand1 {
  token: string;
  request: string;
  command: Command3;
}
export interface Command3 {
  clickTrackingParams: string;
  showReloadUiCommand: ScrollToEngagementPanelCommandOrShowReloadUiCommand1;
}
export interface ScrollToEngagementPanelCommandOrShowReloadUiCommand1 {
  targetId: string;
}
export interface MenuRenderer2 {
  items?: ItemsEntity3[] | null;
  trackingParams: string;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
}
export interface ItemsEntity3 {
  menuServiceItemRenderer: MenuServiceItemRenderer3;
}
export interface MenuServiceItemRenderer3 {
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  serviceEndpoint: ServiceEndpointOrCommand2;
  trackingParams: string;
}
export interface ServiceEndpointOrCommand2 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata7;
  signalServiceEndpoint: SignalServiceEndpoint5;
}
export interface SignalServiceEndpoint5 {
  signal: string;
  actions?: ActionsEntity6[] | null;
}
export interface OnShowCommandsEntity {
  clickTrackingParams: string;
  scrollToEngagementPanelCommand: ScrollToEngagementPanelCommandOrShowReloadUiCommand1;
}
export interface Topbar {
  desktopTopbarRenderer: DesktopTopbarRenderer;
}
export interface DesktopTopbarRenderer {
  logo: Logo;
  searchbox: Searchbox;
  trackingParams: string;
  countryCode: string;
  topbarButtons?: TopbarButtonsEntity[] | null;
  hotkeyDialog: HotkeyDialog;
  backButton: BackButtonOrForwardButton;
  forwardButton: BackButtonOrForwardButton;
  a11ySkipNavigationButton: A11ySkipNavigationButton;
  voiceSearchButton: VoiceSearchButton;
}
export interface Logo {
  topbarLogoRenderer: TopbarLogoRenderer;
}
export interface TopbarLogoRenderer {
  iconImage: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  tooltipText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  endpoint: NavigationEndpointOrEndpoint;
  trackingParams: string;
  overrideEntityKey: string;
}
export interface Searchbox {
  fusionSearchboxRenderer: FusionSearchboxRenderer;
}
export interface FusionSearchboxRenderer {
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  placeholderText: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  config: Config1;
  trackingParams: string;
  searchEndpoint: SearchEndpoint;
  clearButton: ClearButtonOrExitButton;
}
export interface Config1 {
  webSearchboxConfig: WebSearchboxConfig;
}
export interface WebSearchboxConfig {
  requestLanguage: string;
  requestDomain: string;
  hasOnscreenKeyboard: boolean;
  focusSearchbox: boolean;
}
export interface SearchEndpoint {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  searchEndpoint: SearchEndpoint1;
}
export interface SearchEndpoint1 {
  query: string;
}
export interface ClearButtonOrExitButton {
  buttonRenderer: ButtonRenderer16;
}
export interface ButtonRenderer16 {
  style: string;
  size: string;
  isDisabled: boolean;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
}
export interface TopbarButtonsEntity {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer | null;
  buttonRenderer?: ButtonRenderer17 | null;
}
export interface TopbarMenuButtonRenderer {
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  menuRequest: MenuRequest;
  trackingParams: string;
  accessibility: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
  tooltip: string;
  style: string;
}
export interface MenuRequest {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata2;
  signalServiceEndpoint: SignalServiceEndpoint6;
}
export interface SignalServiceEndpoint6 {
  signal: string;
  actions?: ActionsEntity7[] | null;
}
export interface ActionsEntity7 {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction3;
}
export interface OpenPopupAction3 {
  popup: Popup3;
  popupType: string;
  beReused: boolean;
}
export interface Popup3 {
  multiPageMenuRenderer: MultiPageMenuRenderer;
}
export interface MultiPageMenuRenderer {
  trackingParams: string;
  style: string;
  showLoadingSpinner: boolean;
}
export interface ButtonRenderer17 {
  style: string;
  size: string;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  navigationEndpoint: NavigationEndpoint6;
  trackingParams: string;
  targetId: string;
}
export interface NavigationEndpoint6 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata5;
  signInEndpoint: SignInEndpoint3;
}
export interface SignInEndpoint3 {
  idamTag: string;
}
export interface HotkeyDialog {
  hotkeyDialogRenderer: HotkeyDialogRenderer;
}
export interface HotkeyDialogRenderer {
  title: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  sections?: SectionsEntity[] | null;
  dismissButton: DismissButton2;
  trackingParams: string;
}
export interface SectionsEntity {
  hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}
export interface HotkeyDialogSectionRenderer {
  title: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  options?: OptionsEntity[] | null;
}
export interface OptionsEntity {
  hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}
export interface HotkeyDialogSectionOptionRenderer {
  label: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  hotkey: string;
  hotkeyAccessibilityLabel?: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel1 | null;
}
export interface SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel1 {
  accessibilityData: AccessibilityOrAccessibilityData;
}
export interface DismissButton2 {
  buttonRenderer: ButtonRenderer18;
}
export interface ButtonRenderer18 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  trackingParams: string;
}
export interface BackButtonOrForwardButton {
  buttonRenderer: ButtonRenderer19;
}
export interface ButtonRenderer19 {
  trackingParams: string;
  command: ServiceEndpointOrCommand2;
}
export interface A11ySkipNavigationButton {
  buttonRenderer: ButtonRenderer20;
}
export interface ButtonRenderer20 {
  style: string;
  size: string;
  isDisabled: boolean;
  text: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  trackingParams: string;
  command: ServiceEndpointOrCommand2;
}
export interface VoiceSearchButton {
  buttonRenderer: ButtonRenderer21;
}
export interface ButtonRenderer21 {
  style: string;
  size: string;
  isDisabled: boolean;
  serviceEndpoint: ServiceEndpoint4;
  icon: IconOrDefaultIconOrUntoggledIconOrToggledIconOrIconImage;
  tooltip: string;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityOrUnsubscribeAccessibilityOrAccessibilityOrAccessibilityDataOrUntoggledAccessibilityOrToggledAccessibilityOrEnabledAccessibilityDataOrDisabledAccessibilityDataOrHotkeyAccessibilityLabel;
}
export interface ServiceEndpoint4 {
  clickTrackingParams: string;
  commandMetadata: CommandMetadata7;
  signalServiceEndpoint: SignalServiceEndpoint7;
}
export interface SignalServiceEndpoint7 {
  signal: string;
  actions?: ActionsEntity8[] | null;
}
export interface ActionsEntity8 {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction4;
}
export interface OpenPopupAction4 {
  popup: Popup4;
  popupType: string;
}
export interface Popup4 {
  voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}
export interface VoiceSearchDialogRenderer {
  placeholderHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  promptHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  exampleQuery1: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  exampleQuery2: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  promptMicrophoneLabel: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  loadingHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  connectionErrorHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  connectionErrorMicrophoneLabel: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  permissionsHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  permissionsSubtext: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  disabledHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  disabledSubtext: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  microphoneButtonAriaLabel: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
  exitButton: ClearButtonOrExitButton;
  trackingParams: string;
  microphoneOffPromptHeader: NameOrDialogMessagesEntityOrTextOrButtonTextOrSubscribedButtonTextOrUnsubscribedButtonTextOrUnsubscribeButtonTextOrDetailsTextOrTitleOrContentOrHeaderTextOrSubtitleOrLabelOrVideoCountShortTextOrSectionTitleOrContextualInfoOrTooltipTextOrPlaceholderTextOrPlaceholderHeaderOrPromptHeaderOrExampleQuery1OrExampleQuery2OrPromptMicrophoneLabelOrLoadingHeaderOrConnectionErrorHeaderOrConnectionErrorMicrophoneLabelOrPermissionsHeaderOrPermissionsSubtextOrDisabledHeaderOrDisabledSubtextOrMicrophoneButtonAriaLabelOrMicrophoneOffPromptHeader;
}
export interface PageVisualEffectsEntity {
  cinematicContainerRenderer: CinematicContainerRenderer;
}
export interface CinematicContainerRenderer {
  gradientColorConfig?: GradientColorConfigEntity[] | null;
  presentationStyle: string;
  config: Config2;
}
export interface GradientColorConfigEntity {
  darkThemeColor: number;
  startLocation?: number | null;
}
export interface Config2 {
  lightThemeBackgroundColor: number;
  darkThemeBackgroundColor: number;
  animationConfig: AnimationConfig;
  colorSourceSizeMultiplier: number;
  applyClientImageBlur: boolean;
  bottomColorSourceHeightMultiplier: number;
  maxBottomColorSourceHeight: number;
  colorSourceWidthMultiplier: number;
  colorSourceHeightMultiplier: number;
  blurStrength: number;
  enableInLightTheme: boolean;
}
export interface AnimationConfig {
  minImageUpdateIntervalMs: number;
  crossfadeDurationMs: number;
  crossfadeStartOffset: number;
  maxFrameRate: number;
}
export interface FrameworkUpdates1 {
  entityBatchUpdate: EntityBatchUpdate1;
  elementUpdate: ElementUpdate;
}
export interface EntityBatchUpdate1 {
  mutations?: MutationsEntity1[] | null;
  timestamp: Timestamp;
}
export interface MutationsEntity1 {
  entityKey: string;
  type: string;
  options?: Options | null;
  payload?: Payload1 | null;
}
export interface Options {
  persistenceOption: string;
}
export interface Payload1 {
  transcriptTrackSelectionEntity?: TranscriptTrackSelectionEntity | null;
  transcriptSearchBoxStateEntity?: TranscriptSearchBoxStateEntity | null;
}
export interface TranscriptTrackSelectionEntity {
  key: string;
  selectedTrackIndex: number;
  serializedParams: string;
}
export interface TranscriptSearchBoxStateEntity {
  key: string;
  isHidden: boolean;
}
export interface ElementUpdate {
  updates?: UpdatesEntity[] | null;
}
export interface UpdatesEntity {
  templateUpdate?: TemplateUpdate | null;
  resourceStatusInResponseCheck?: ResourceStatusInResponseCheck | null;
}
export interface TemplateUpdate {
  identifier: string;
  serializedTemplateConfig: string;
  dependencies?: string[] | null;
}
export interface ResourceStatusInResponseCheck {
  resourceStatuses?: ResourceStatusesEntity[] | null;
  serverBuildLabel: string;
}
export interface ResourceStatusesEntity {
  identifier: string;
  status: string;
}
export interface FormatsEntity {
  mimeType: string;
  qualityLabel?: string | null;
  bitrate: number;
  audioBitrate?: number | null;
  itag: number;
  url: string;
  width?: number | null;
  height?: number | null;
  initRange?: InitRangeOrIndexRange1 | null;
  indexRange?: InitRangeOrIndexRange2 | null;
  lastModified: string;
  contentLength?: string | null;
  quality: string;
  fps?: number | null;
  projectionType: string;
  averageBitrate?: number | null;
  approxDurationMs: string;
  hasVideo: boolean;
  hasAudio: boolean;
  container: string;
  codecs: string;
  videoCodec?: string | null;
  audioCodec?: string | null;
  isLive: boolean;
  isHLS: boolean;
  isDashMPD: boolean;
  colorInfo?: ColorInfo1 | null;
  highReplication?: boolean | null;
  audioQuality?: string | null;
  audioSampleRate?: string | null;
  audioChannels?: number | null;
  loudnessDb?: number | null;
}
export interface InitRangeOrIndexRange1 {
  start: string;
  end: string;
}
export interface InitRangeOrIndexRange2 {
  start: string;
  end: string;
}
export interface ColorInfo1 {
  primaries: string;
  transferCharacteristics: string;
}
export interface RelatedVideosEntity {
  id: string;
  title: string;
  published: string;
  author: Author;
  short_view_count_text: string;
  view_count: string;
  length_seconds: number;
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
  richThumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
  isLive: boolean;
}
export interface Author {
  id: string;
  name: string;
  user: string;
  channel_url: string;
  user_url: string;
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
  verified: boolean;
}
export interface VideoDetails {
  embed: Embed;
  title: string;
  description: string;
  lengthSeconds: string;
  ownerProfileUrl: string;
  externalChannelId: string;
  isFamilySafe: boolean;
  availableCountries?: string[] | null;
  isUnlisted: boolean;
  hasYpcMetadata: boolean;
  viewCount: string;
  category: string;
  publishDate: string;
  ownerChannelName: string;
  uploadDate: string;
  videoId: string;
  keywords?: string[] | null;
  channelId: string;
  isOwnerViewing: boolean;
  isCrawlable: boolean;
  allowRatings: boolean;
  author: Author1;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
  media: ClientForecastingAdRendererOrMedia1;
  likes?: null;
  dislikes?: null;
  age_restricted: boolean;
  video_url: string;
  storyboards?: StoryboardsEntity[] | null;
  chapters?: null[] | null;
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
}
export interface Author1 {
  id: string;
  name: string;
  user: string;
  channel_url: string;
  external_channel_url: string;
  user_url: string;
  thumbnails?: ThumbnailsEntityOrRichThumbnailsEntity[] | null;
  verified: boolean;
  subscriber_count: number;
}
export interface ClientForecastingAdRendererOrMedia1 {}

export interface StoryboardsEntity {
  templateUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailCount: number;
  interval: number;
  columns: number;
  rows: number;
  storyboardCount: number;
}
