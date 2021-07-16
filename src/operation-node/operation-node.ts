export type OperationNodeKind =
  | 'IdentifierNode'
  | 'RawNode'
  | 'SelectQueryNode'
  | 'SelectionNode'
  | 'ReferenceNode'
  | 'ColumnNode'
  | 'TableNode'
  | 'AliasNode'
  | 'FromNode'
  | 'SelectAllNode'
  | 'FilterNode'
  | 'AndNode'
  | 'OrNode'
  | 'ParensNode'
  | 'ValueNode'
  | 'ValueListNode'
  | 'PrimitiveValueListNode'
  | 'JoinNode'
  | 'OperatorNode'
  | 'WhereNode'
  | 'InsertQueryNode'
  | 'DeleteQueryNode'
  | 'ReturningNode'
  | 'CreateTableNode'
  | 'ColumnDefinitionNode'
  | 'DropTableNode'
  | 'DataTypeNode'
  | 'OrderByNode'
  | 'OrderByItemNode'
  | 'GroupByNode'
  | 'GroupByItemNode'
  | 'UpdateQueryNode'
  | 'ColumnUpdateNode'
  | 'LimitNode'
  | 'OffsetNode'
  | 'OnConflictNode'

export interface OperationNode {
  readonly kind: OperationNodeKind
}
