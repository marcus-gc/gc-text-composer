import * as React from 'react';
import type { Value } from '@udecode/plate';

import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import { BasicMarksPlugin } from '@udecode/plate-basic-marks/react';
import { LinkPlugin } from '@udecode/plate-link/react';
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from '@udecode/plate-table/react';
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
  FontSizePlugin,
} from '@udecode/plate-font/react';

import {
  type PlateLeafProps,
  Plate,
  PlateLeaf,
  usePlateEditor,
} from '@udecode/plate/react';
import { withProps } from '@udecode/cn';
import { HEADING_KEYS } from '@udecode/plate-heading';

import { Editor, EditorContainer } from '@/components/ui/editor';
import { FixedToolbar } from '@/components/ui/fixed-toolbar';
import { MarkToolbarButton } from '@/components/ui/mark-toolbar-button';
import { ToolbarGroup } from '@/components/ui/toolbar';
import { RedoToolbarButton, UndoToolbarButton } from '@/components/ui/history-toolbar-button';
import { InsertDropdownMenu } from '@/components/ui/insert-dropdown-menu';
import { TurnIntoDropdownMenu } from '@/components/ui/turn-into-dropdown-menu';
import { FontSizeToolbarButton } from '@/components/ui/font-size-toolbar-button';
import { HeadingElement } from '@/components/ui/heading-element';
import { TableCellHeaderElement } from '@/components/ui/table-cell-element';
import { TableCellElement } from '@/components/ui/table-cell-element';
import { TableElement } from '@/components/ui/table-element';
import { TableRowElement } from '@/components/ui/table-row-element';

const initialValue: Value = [
  {
    type: 'p',
    children: [
      { text: 'Hello! Try out the ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ', and ' },
      { text: 'underline', underline: true },
      { text: ' formatting.' },
    ],
  },
];


export interface TextComposerProps {
  value?: Value;
  onChange?: (value: Value) => void;
}

export const TextComposer: React.FC<TextComposerProps> = ({ value = initialValue, onChange }) => {
  const editor = usePlateEditor({
    plugins: [
      BasicElementsPlugin,
      BasicMarksPlugin,
      LinkPlugin,
      FontColorPlugin,
      FontBackgroundColorPlugin,
      FontSizePlugin,
      TablePlugin
    ],
    value: value,
    components: {
      bold: (props: PlateLeafProps) => <PlateLeaf {...props} as="strong" />,
      italic: (props: PlateLeafProps) => <PlateLeaf {...props} as="em" />,
      underline: (props: PlateLeafProps) => <PlateLeaf {...props} as="u" />,
      [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
      [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
      [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
      [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
      [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
      [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
      [TableCellHeaderPlugin.key]: TableCellHeaderElement,
      [TableCellPlugin.key]: TableCellElement,
      [TablePlugin.key]: TableElement,
      [TableRowPlugin.key]: TableRowElement,
    },
  });

  return (
    <div className="w-full rounded-md shadow-md border">
      <Plate editor={editor}>
        <FixedToolbar className="justify-start rounded-t-lg">
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <InsertDropdownMenu />
            <TurnIntoDropdownMenu />
            <FontSizeToolbarButton />
          </ToolbarGroup>


          <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)">B</MarkToolbarButton>
          <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)">I</MarkToolbarButton>
          <MarkToolbarButton nodeType="underline" tooltip="Underline (⌘+U)">U</MarkToolbarButton>
        </FixedToolbar>
        <EditorContainer>
          <Editor placeholder="Type your amazing content here..." />
        </EditorContainer>
      </Plate>
    </div>

  );
};

export default TextComposer;
