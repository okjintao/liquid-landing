"use client";

import DocsPageTemplate from "@/components/DocsPageTemplate";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <DocsPageTemplate title="Be Liquid">
      <p className="text-lg text-white/90 leading-relaxed">
        Ready to dive into the LIQUID Protocol? This guide will help you get
        started with the platform and join our growing community.
      </p>

      <div className="mt-8 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Launch the Application
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Experience the power of LIQUID Protocol firsthand. Our user-friendly
            interface makes it easy to start participating in the ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.liquidprotocol.io"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg bg-blue-500 !text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Launch App
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-4">
            Getting Started
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                1. Install Frame Wallet
              </h3>
              <p className="text-white/80 mb-4">
                Frame is our recommended wallet for the best experience with
                LIQUID Protocol. It provides enhanced security and a seamless
                interface for interacting with the Hype EVM.
              </p>
              <a
                href="https://frame.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--color-liquid-blue)] hover:text-[var(--color-liquid-blue)]/90"
              >
                Download Frame
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                2. Connect to Hype EVM
              </h3>
              <p className="text-white/80">
                LIQUID Protocol is deployed on the Hype EVM. Make sure to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 mt-2">
                <li>Add Hype EVM to your Frame wallet</li>
                <li>Ensure you have HYPE tokens for gas fees</li>
                <li>Connect your wallet to the LIQUID Protocol app</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/90 mb-6">
            Connect with other LIQUID Protocol users, developers, and
            enthusiasts. Our community is a great place to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 mb-8">
            <li>Get help and support from experienced users</li>
            <li>Stay updated with the latest protocol developments</li>
            <li>Share ideas and feedback with the team</li>
            <li>Connect with other DeFi enthusiasts</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
              <p className="text-white/80 mb-4">
                Join our Telegram group for real-time discussions,
                announcements, and community support.
              </p>
              <a
                href="https://t.me/liquidprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--color-liquid-blue)] hover:text-[var(--color-liquid-blue)]/90"
              >
                Join Telegram
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Twitter</h3>
              <p className="text-white/80 mb-4">
                Follow us on Twitter for the latest updates, news, and
                announcements about the protocol.
              </p>
              <a
                href="https://twitter.com/liquidprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--color-liquid-blue)] hover:text-[var(--color-liquid-blue)]/90"
              >
                Follow on Twitter
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocsPageTemplate>
  );
}
