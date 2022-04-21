declare class SheetValues<V extends Record<string, any>> {
	constructor(SpreadId: string, SheetId?: string);

	/**
	 * Gets the latest values of the sheet. This is called automatically and is only exposed for critical cases.
	 * @internal
	 */
	UpdateValues(): void;

	/**
	 * Returns the Value or `DefaultValue` if the Value doesn’t exist.
	 * This is the same as doing `SheetManager.Values.ValueName ?? DefaultValue` and only exists for style purposes.
	 */
	GetValue<T>(ValueName: string, DefaultValue: T): T;

	/**
	 * Returns a `RBXScriptSignal` that fires when the given Value changes, passing two arguments in the fired event (`NewValue`, `OldValue`).
	 */
	GetValueChangedSignal<T>(
		ValueName: string
	): RBXScriptSignal<(NewValue: T, OldValue: T) => void>;

	/**
	 * Cleans up the SheetManager.
	 */
	Destroy(): void;

	/**
	 * Dictionary of your values.
	 */
	Values: Readonly<V>;

	/**
	 * Unix timestamp of the last time `SheetManager.Values` was updated.
	 */
	LastUpdated: number;

	/**
	 * Name of the service used to retrieve the current SheetManager.Values (Google API, Datastore, Datastore Override, MsgService Subscription).
	 * Used for debugging.
	 * @internal
	 */
	LastSource: string;

	/**
	 * Fires when `SheetManager.Values` is changed
	 */
	Changed: RBXScriptSignal<(NewValues: Readonly<V>) => void>;
}

export = SheetValues;
