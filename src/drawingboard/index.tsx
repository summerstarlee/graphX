import mermaid from "mermaid";
import { useEffect, useRef, useState } from "react";

// 初始化 Mermaid 配置
mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  look: "handDrawn",
  securityLevel: "loose", // 允许部分非安全内容
});

const MermaidRenderer = () => {
  const [inputText, setInputText] = useState("");
  const [svgCode, setSvgCode] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // 渲染 Mermaid 图表
  const renderMermaid = async (code: string) => {
    try {
      const { svg } = await mermaid.render("mermaid-svg", code);
      setSvgCode(svg);
    } catch (err) {
      setSvgCode("<div>Error rendering diagram</div>");
    }
  };

  // 当输入变化时重新渲染
  useEffect(() => {
    if (inputText) {
      renderMermaid(inputText);
    }
  }, [inputText]);

  // 初始化时渲染一次
  useEffect(() => {
    renderMermaid(inputText);
  }, []);

  return (
    <div className="font-sans bg-white h-screen flex flex-col">
      <p className="text-xl font-bold p-2">graphX 图表实时渲染器</p>
      <div className="flex gap-4 p-2 flex-1 overflow-hidden">
        {/* 输入框 */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 h-full p-2 rounded-md border border-[#ccc] font-mono overflow-auto"
          placeholder="输入 Mermaid 代码..."
        />
        {/* 图表预览 */}
        <div
          className="flex-2 border border-[#ccc] rounded-md p-2 overflow-auto w-full h-full"
          dangerouslySetInnerHTML={{ __html: svgCode }}
          ref={containerRef}
        />
      </div>
    </div>
  );
};

export default MermaidRenderer;
