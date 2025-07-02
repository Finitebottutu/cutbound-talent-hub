
import HirePageLayout from '@/components/HirePageLayout';
import { generateDeveloper, skillSets } from '@/utils/developerData';

const BlockchainDevelopers = () => {
  const developers = Array.from({ length: 5 }, () => 
    generateDeveloper('Blockchain Developer', skillSets.blockchain)
  );

  return (
    <HirePageLayout
      pageTitle="Hire Blockchain Developers"
      pageDescription="Hire blockchain developers who create decentralized applications and smart contracts. Our developers are experts in Ethereum, Solidity, and Web3."
      developers={developers}
      category="blockchain"
    />
  );
};

export default BlockchainDevelopers;
