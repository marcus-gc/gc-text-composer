import * as React from 'react';
import type { Value } from '@udecode/plate';

import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import { LinkPlugin } from '@udecode/plate-link/react';

import {
  createPlatePlugin,
  Plate,
  usePlateEditor,
  PlateLeaf,
  PlateLeafProps, useEditorRef
} from '@udecode/plate/react';
import { Editor, EditorContainer } from '@/components/ui/editor';
import { FixedToolbar } from '@/components/ui/fixed-toolbar';
import {ToolbarButton, ToolbarGroup } from '@/components/ui/toolbar';
import { RedoToolbarButton, UndoToolbarButton } from '@/components/ui/history-toolbar-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const initialValue: Value = [
  {
    type: 'p',
    children: [
      { text: 'Hello! This is a basic editor with a ' },
      { merge_token: true, text: '$merge token$' },
      { text: ''},
    ],
  },
];

function MergeToken({ children, ...props }: PlateLeafProps) {
  return (
    <PlateLeaf {...props} className="bg-blue-200 px-1 py-1 rounded-lg">
      <span>{children}</span>
    </PlateLeaf>
  );
}

const MergeTokenPlugin = createPlatePlugin({
  key: 'merge_token',
  node: {
    isLeaf: true,
    type: 'merge_token',
  },
});

export interface TextComposerProps {
  value?: Value;
  onChange?: (value: Value) => void;
}

const items = [
  {
    label: 'Constituent First Name',
    value: 'const_first_name',
  },
  {
    label: 'Constituent Last Name',
    value: 'const_last_name',
  },
  {
    label: 'Personalization Display Name',
    value: 'person_display_name',
  },
]

function nodeEndsWithSpace(node: any, offset: number) {
  if (!node || !node.text) {
    return false;
  }
  const text = node.text.slice(0, offset);
  return text.endsWith(' ') || text.endsWith('\n');
}

function MergeTokenDropdownMenu(props) {
  const editor = useEditorRef();
  const [open, setOpen] = React.useState(false);

  function handleInsertMergeToken(value: string) {
    const mergeTokenNode = { merge_token: true, text: `$${value}$` };
    if (!editor.selection) {
      // This should insert the merge token at the end of all the nodes
      return;
    }
    const insertion = []
    const [elementAtCursor] = editor.node(editor.selection.anchor) || [];

    if (!nodeEndsWithSpace(elementAtCursor, editor.selection.anchor.offset)) {
      insertion.push({ text: ' ' });
    }

    insertion.push(mergeTokenNode)
    insertion.push({ text: ' ' })

    editor.tf.insertNodes(insertion);
    editor.tf.focus();
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip="Merge Tokens" isDropdown>
          Merge Tokens
        </ToolbarButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-0" align="start">
        <DropdownMenuRadioGroup
          value={props.value}
          onValueChange={handleInsertMergeToken}
        >
          {items.map(({ label, value: itemValue }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              className="pl-2 *:first:[span]:hidden"
              value={itemValue}
            >
              <span>{label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const SimpleTextComposer: React.FC<TextComposerProps> = ({ value = initialValue, onChange }) => {
  const editor = usePlateEditor({
    plugins: [
      BasicElementsPlugin,
      LinkPlugin,
      MergeTokenPlugin,
    ],
    value: value,
    components: {
      merge_token: MergeToken,
    }
  });

  return (
    <div className="w-full rounded-md shadow-md border">
      <Plate editor={editor}>
        <FixedToolbar className="justify-start rounded-t-lg">
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          <MergeTokenDropdownMenu />

        </FixedToolbar>
        <EditorContainer>
          <Editor placeholder="Type your amazing content here..." />
        </EditorContainer>
      </Plate>
    </div>

  );
};

export default SimpleTextComposer;
