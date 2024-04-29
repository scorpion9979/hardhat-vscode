import { SymbolKind } from "vscode-languageserver-types";
import { NodeLabel, RuleKind, TokenKind } from "@nomicfoundation/slang/kinds";
import { SymbolVisitor } from "../SymbolVisitor";

export class StructMember extends SymbolVisitor {
  public ruleKind = RuleKind.StructMember;
  public symbolKind = SymbolKind.Property;
  public nameToken = [NodeLabel.Name, TokenKind.Identifier] as const;
}