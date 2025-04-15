/**
 * Switch UI component
 */
function Switch({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`flex h-6 w-11 items-center rounded-full transition-colors ${isOn ? "bg-indigo-600" : "bg-slate-200"}`}
    >
      <span
        className={`size-4 rounded-full bg-white transition-transform ${isOn ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

/**
 * Toggle switch UI component
 */
export function ToggleSwitch(props: {
  labelOff?: string;
  labelOn?: string;
  isOn: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div>{props.labelOff}</div>
      <Switch isOn={props.isOn} onToggle={props.onToggle} />
      <div>{props.labelOn}</div>
    </div>
  );
}

/**
 * Toggle button group UI component
 */
export function ToggleGroup<const T extends readonly string[]>(props: {
  options: T;
  selectedOption: T[number];
  onSelect: (option: T[number]) => void;
}) {
  return (
    <div className="rounded-full bg-slate-200 p-1">
      {props.options.map((option) => (
        <button
          key={option}
          onClick={() => {
            props.onSelect(option);
          }}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
            props.selectedOption === option
              ? "bg-purple-600 text-white"
              : "text-slate-700"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
