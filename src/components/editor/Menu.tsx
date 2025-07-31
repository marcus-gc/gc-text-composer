import * as React from 'react';

import {
    BoldPlugin,
    CodePlugin,
    ItalicPlugin,
    StrikethroughPlugin,
    UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import {
    FontBackgroundColorPlugin,
    FontColorPlugin,
} from '@udecode/plate-font/react';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import {
    AudioPlugin,
    FilePlugin,
    ImagePlugin,
    VideoPlugin,
} from '@udecode/plate-media/react';
import { useEditorReadOnly } from '@udecode/plate/react';
import {
    ArrowUpToLineIcon,
    BaselineIcon,
    BoldIcon,
    Code2Icon,
    HighlighterIcon,
    ItalicIcon,
    PaintBucketIcon,
    StrikethroughIcon,
    UnderlineIcon,
    WandSparklesIcon,
} from 'lucide-react';

import { MoreDropdownMenu } from '@/components/ui/more-dropdown-menu';

import { AIToolbarButton } from '@/components/ui/ai-toolbar-button';
import { AlignDropdownMenu } from '@/components/ui/align-dropdown-menu';
import { ColorDropdownMenu } from '@/components/ui/color-dropdown-menu';
import { CommentToolbarButton } from '@/components/ui/comment-toolbar-button';
import { EmojiDropdownMenu } from '@/components/ui/emoji-dropdown-menu';
import { ExportToolbarButton } from '@/components/ui/export-toolbar-button';
import { FontSizeToolbarButton } from '@/components/ui/font-size-toolbar-button';
import { RedoToolbarButton, UndoToolbarButton } from '@/components/ui/history-toolbar-button';
import { ImportToolbarButton } from '@/components/ui/import-toolbar-button';
import {
    BulletedIndentListToolbarButton,
    NumberedIndentListToolbarButton,
} from '@/components/ui/indent-list-toolbar-button';
import { IndentTodoToolbarButton } from '@/components/ui/indent-todo-toolbar-button';
import { IndentToolbarButton } from '@/components/ui/indent-toolbar-button';
import { InsertDropdownMenu } from '@/components/ui/insert-dropdown-menu';
import { LineHeightDropdownMenu } from '@/components/ui/line-height-dropdown-menu';
import { LinkToolbarButton } from '@/components/ui/link-toolbar-button';
import { MarkToolbarButton } from '@/components/ui/mark-toolbar-button';
import { MediaToolbarButton } from '@/components/ui/media-toolbar-button';
import { ModeDropdownMenu } from '@/components/ui/mode-dropdown-menu';
import { OutdentToolbarButton } from '@/components/ui/outdent-toolbar-button';
import { TableDropdownMenu } from '@/components/ui/table-dropdown-menu';
import { ToggleToolbarButton } from '@/components/ui/toggle-toolbar-button';
import { ToolbarGroup } from '@/components/ui/toolbar';
import { TurnIntoDropdownMenu } from '@/components/ui/turn-into-dropdown-menu';

export function Menu() {
    const readOnly = useEditorReadOnly();

    return (
        <div className="flex w-full">
            {!readOnly && (
                <>
                    <ToolbarGroup>
                        <UndoToolbarButton />
                        <RedoToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <AIToolbarButton tooltip="AI commands">
                            <WandSparklesIcon />
                        </AIToolbarButton>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <ExportToolbarButton>
                            <ArrowUpToLineIcon />
                        </ExportToolbarButton>

                        <ImportToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <InsertDropdownMenu />
                        <TurnIntoDropdownMenu />
                        <FontSizeToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
                            <BoldIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton
                            nodeType={ItalicPlugin.key}
                            tooltip="Italic (⌘+I)"
                        >
                            <ItalicIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton
                            nodeType={UnderlinePlugin.key}
                            tooltip="Underline (⌘+U)"
                        >
                            <UnderlineIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton
                            nodeType={StrikethroughPlugin.key}
                            tooltip="Strikethrough (⌘+⇧+M)"
                        >
                            <StrikethroughIcon />
                        </MarkToolbarButton>

                        <MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
                            <Code2Icon />
                        </MarkToolbarButton>

                        <ColorDropdownMenu
                            nodeType={FontColorPlugin.key}
                            tooltip="Text color"
                        >
                            <BaselineIcon />
                        </ColorDropdownMenu>

                        <ColorDropdownMenu
                            nodeType={FontBackgroundColorPlugin.key}
                            tooltip="Background color"
                        >
                            <PaintBucketIcon />
                        </ColorDropdownMenu>
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <AlignDropdownMenu />

                        <NumberedIndentListToolbarButton />
                        <BulletedIndentListToolbarButton />
                        <IndentTodoToolbarButton />
                        <ToggleToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <LinkToolbarButton />
                        <TableDropdownMenu />
                        <EmojiDropdownMenu />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <MediaToolbarButton nodeType={ImagePlugin.key} />
                        <MediaToolbarButton nodeType={VideoPlugin.key} />
                        <MediaToolbarButton nodeType={AudioPlugin.key} />
                        <MediaToolbarButton nodeType={FilePlugin.key} />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <LineHeightDropdownMenu />
                        <OutdentToolbarButton />
                        <IndentToolbarButton />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <MoreDropdownMenu />
                    </ToolbarGroup>
                </>
            )}

            <div className="grow" />

            <ToolbarGroup>
                <MarkToolbarButton nodeType={HighlightPlugin.key} tooltip="Highlight">
                    <HighlighterIcon />
                </MarkToolbarButton>
                <CommentToolbarButton />
            </ToolbarGroup>

            <ToolbarGroup>
                <ModeDropdownMenu />
            </ToolbarGroup>
        </div>
    );
}
