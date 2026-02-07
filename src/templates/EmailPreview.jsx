import FormalTemplate from './FormalTemplate';
import OutlookTemplate from './OutlookTemplate';
import ReplyChainTemplate from './ReplyChainTemplate';
import GmailTemplate from './GmailTemplate';
import TruncatedTemplate from './TruncatedTemplate';
import EncodingTemplate from './EncodingTemplate';
import CautionTemplate from './CautionTemplate';
import PoliticalTemplate from './PoliticalTemplate';

const TEMPLATE_MAP = {
  formal: FormalTemplate,
  outlook: OutlookTemplate,
  reply_chain: ReplyChainTemplate,
  gmail: GmailTemplate,
  truncated: TruncatedTemplate,
  encoding: EncodingTemplate,
  caution: CautionTemplate,
  political: PoliticalTemplate,
};

export default function EmailPreview({ data }) {
  if (!data) return null;
  const Template = TEMPLATE_MAP[data.style] || TEMPLATE_MAP.formal;
  return <Template data={data} />;
}
