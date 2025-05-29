import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TreeNode } from '../../models/tree-node.model';
import { TreeNodeComponent } from "../tree-node/tree-node.component";

@Component({
  selector: 'tree',
  imports: [TreeNodeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {
  public readonly nodes = input.required<TreeNode[]>()
}
