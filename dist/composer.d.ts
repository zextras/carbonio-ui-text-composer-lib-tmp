import { default as React } from 'react';
import { IAllProps as EditorProps } from '@tinymce/tinymce-react';
import { EditorOptions, TinyMCE } from 'tinymce/tinymce';
import { AccountSettingsPrefs } from './editor-style-utils';
type ComposerProps = Omit<EditorProps, 'onEditorChange'> & {
    /** The callback invoked when an edit is performed into the editor. `([text, html]) => {}` */
    onEditorChange?: (values: [string, string]) => void;
    /** Enable the distraction-free mode */
    inline?: boolean;
    /** The initial content of the editor */
    initialValue?: EditorProps['initialValue'];
    /** The content of the editor (controlled mode) */
    value?: EditorProps['value'];
    /**
     * Callback called when user choose some file from the os.
     * If defined, a menu item to add inline images is added to the composer.
     */
    onFileSelect?: (arg: {
        editor: TinyMCE;
        files: HTMLInputElement['files'] | undefined;
    }) => void;
    customInitOptions?: Partial<Omit<EditorOptions, 'selector' | 'target'>>;
    /** Whether the editor should be disabled */
    disabled?: boolean;
    /** UserPreferences */
    accountSettingsPrefs?: AccountSettingsPrefs;
};
export declare const Composer: ({ onEditorChange, onFileSelect, inline, value, initialValue, customInitOptions, disabled, accountSettingsPrefs, ...rest }: ComposerProps) => React.JSX.Element;
export {};
//# sourceMappingURL=composer.d.ts.map