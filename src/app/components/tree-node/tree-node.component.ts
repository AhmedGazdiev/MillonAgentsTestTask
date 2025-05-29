import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TreeNode } from '../../models/tree-node.model';

@Component({
  selector: 'tree-node',
  imports: [],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent {
  public readonly node = input.required<TreeNode>()
  public isOpen = false;

  public toggleOpen(): void {
    if (this.hasChildren()) {
      this.isOpen = !this.isOpen;
    }
  }

  public readonly hasChildren = computed(() => this.node().children.length > 0);
}
